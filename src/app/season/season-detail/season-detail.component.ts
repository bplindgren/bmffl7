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

  changeDivision(e: String): void {
    this.currentDivision = e["value"];
  }

  ngAfterViewInit() {
    console.log("season detail view initialized");
    this.route.url.subscribe(url => {
      this.year = 2010 + (+(url[0]['path']));
      let seasonId = +(url[0]["path"]);
      this.setTeams(seasonId);
    })
  }

}
