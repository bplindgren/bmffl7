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
        (a["id"] > b["id"]) ? 1 : ((b["id"] > a["id"]) ? -1 : 0)
      )
    })
  }

}
