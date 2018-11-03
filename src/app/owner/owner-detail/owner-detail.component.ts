import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { SeasonService } from '../../season/season.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';
import { Team } from '../../team';
import { StatCardComponent } from '../stat-card/stat-card';
import { MatGridListModule } from '@angular/material/grid-list';
import { VerticalBarChartComponent } from '../charts/vertical-bar-chart/vertical-bar-chart';
import { TeamsTableComponent } from '../../team/teams-table/teams-table.component';

import { AllTimeStats } from '../../allTimeStats';

@Component({
  selector: 'owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  private owner: Owner;
  private stat: Array<any>;
  private yAxis: "";
  private allTimeStats: AllTimeStats;
  private ownerTeams: Team[];

  constructor(
    private ownerService: OwnerService,
    private teamService: TeamService,
    private seasonService: SeasonService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ownerService.getOwner(this.route.params.value["id"])
      .subscribe(owner => {
        this.owner = owner;
        this.getData(owner.id);
      }
    )
    this.route.url.subscribe(url => {
      this.ownerService.getOwner(url[1])
        .subscribe(newOwner => {
          this.owner = newOwner;
        })
    })
  }

  getData(id: number): void {
    let statsResponse = this.ownerService.getOwnerAllTimeStats(id);
    let teamResponse = this.teamService.getOwnerTeamsStatsView(id);
    let yearAverages = this.seasonService.getSeasonAverages();
    forkJoin([statsResponse, teamResponse, yearAverages]).subscribe(responseList => {
      // this.owner = responseList[0];
      console.log(responseList[2])
      this.allTimeStats = responseList[0];
      this.cardStats = ["Wins", "Losses", "Ties", "Winning_Percentage", "Points_For", "Points_Against", "Point_Differential", "Points_For_Per_Game", "Points_Against_Per_Game", "PPG_Differential"];
      this.statValues = this.getCardStats(responseList[0]);
      this.ownerTeams = responseList[1];
      this.getGraphData("Wins");
      this.initialized = true;
    })
  }

  setStat(arr: Array<any>): void {
    console.log(arr)
    this.stat = arr[0];
    this.yAxis = arr[1];
  }

  ngAfterViewInit() {
    console.log("owner detail view initialized");
  }

  ngOnDestroy() {
    console.log("owner detail destroyed");
  }
}
