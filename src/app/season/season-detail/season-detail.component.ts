import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeasonService } from '../season-service/season.service';
import { SeasonStats } from '../../seasonStats';
import { Game } from '../../game';
import { GameService } from '../../game/game-service/game.service';
import { Team } from '../../team';
import { TeamService } from '../../team/team-service/team.service';

@Component({
  selector: 'season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit  {
  private teams: SeasonStats[];
  upstairsTeams: SeasonStats[];
  downstairsTeams: SeasonStats[];
  playoffGames: Game[];
  year: number;
  currentDivision: string = 'upstairs';

  constructor(
    private seasonService: SeasonService,
    private teamService: TeamService,
    private gameService: GameService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let seasonId = +this.route.params["value"]["id"];
    this.year = (+this.route.params["value"]["id"] + 2010);
    this.setTeams(seasonId);
    this.setGames(seasonId);
  }

  setTeams(seasonId: number): void {
    this.teamService.getSeasonTeams(seasonId).subscribe(teams => {
      this.teams = teams.sort((a,b) =>
        (a["winningpct"] > b["winningpct"]) ? 1 : ((b["winningpct"] > a["winningpct"]) ? -1 : 0)
      ).reverse()

      this.upstairsTeams = this.getDivisionTeams('upstairs');
      this.downstairsTeams = this.getDivisionTeams('downstairs');
    })
  }

  getDivisionTeams(division: string): SeasonStats[] {
    return this.teams.filter(team =>
      team.division === division)
      .sort((a,b) =>
      (a["standing"] > b["standing"]) ? 1 : ((b["standing"] > a["standing"]) ? -1 : 0)
    )
  }

  setGames(seasonId: number): void {
    this.gameService.getPlayoffGames(seasonId).subscribe(games => {
      this.playoffGames = games;
    })
  }

  changeDivision(e: String) {
    this.currentDivision = e["value"];
  }

  ngAfterViewInit() {
    console.log("season detail view initialized");
    this.route.url.subscribe(url => {
      let seasonId = +(url[0]["path"]);
      this.setTeams(seasonId);
      this.setGames(seasonId);
    })
  }

}
