import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeasonService } from '../season-service/season.service';
import { TeamService } from '../../team/team-service/team.service';
import { Team } from '../../team';

@Component({
  selector: 'season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {
  private teams: Team[];
  upstairsTeams: Team[];
  downstairsTeams: Team[];
  currentDivision: string = 'upstairs';

  constructor(
    private seasonService: SeasonService,
    private teamService: TeamService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let seasonId = this.route.params.value["id"];
    this.teamService.getSeasonTeams(seasonId).subscribe(teams => {
      console.log("season teams: ", teams);
      this.teams = teams.sort((a,b) =>
        (a["wins"] > b["wins"]) ? 1 : ((b["wins"] > a["wins"]) ? -1 : 0)
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
  }

  changeDivision(e: String) {
    this.currentDivision = e.value;
  }

}
