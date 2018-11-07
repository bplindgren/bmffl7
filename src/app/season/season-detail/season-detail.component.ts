import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SeasonService } from '../season-service/season.service';
import { Game } from '../game';
import { GameService } from '../../game.service';
import { Team } from '../../team';
import { TeamService } from '../../team/team-service/team.service';

@Component({
  selector: 'season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {
  private teams: Team[];
  upstairsTeams: Team[];
  downstairsTeams: Team[];
  playofGames: Game[];
  currentDivision: string = 'upstairs';

  constructor(
    private seasonService: SeasonService,
    private teamService: TeamService,
    private gameService: GameService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let seasonId = this.route.params.value["id"];
    this.teamService.getSeasonTeams(seasonId).subscribe(teams => {
      this.teams = teams.sort((a,b) =>
        (a["winningpct"] > b["winningpct"]) ? 1 : ((b["winningpct"] > a["winningpct"]) ? -1 : 0)
      ).reverse()

      // get upstairs teams
      this.upstairsTeams = this.teams.filter(team =>
        team.division === 'upstairs')
        .sort((a,b) =>
        (a["standing"] > b["standing"]) ? 1 : ((b["standing"] > a["standing"]) ? -1 : 0)
      )

      // get downstairs teams
      this.downstairsTeams = this.teams.filter(team =>
        team.division === 'downstairs')
        .sort((a,b) =>
        (a["standing"] > b["standing"]) ? 1 : ((b["standing"] > a["standing"]) ? -1 : 0)
      )
    })

    this.gameService.getPlayoffGames(seasonId).subscribe(games => {
      this.playoffGames = games;
    })
  }

  changeDivision(e: String) {
    this.currentDivision = e.value;
  }

}
