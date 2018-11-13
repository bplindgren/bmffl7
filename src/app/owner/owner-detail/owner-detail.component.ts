import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { startWith, tap, delay } from 'rxjs/operators';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { SeasonService } from '../../season/season-service/season.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';
import { Team } from '../../team';
import { StatCardComponent } from '../stat-card/stat-card';
import { MatGridListModule } from '@angular/material/grid-list';
import { VerticalBarChartComponent } from '../charts/vertical-bar-chart/vertical-bar-chart';
import { TableModule } from '../../shared-modules/table/table.module';

import { AllTimeStats } from '../../allTimeStats';

@Component({
  selector: 'owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  private owner: Owner;
  private stat: Array<any>;
  private yAxis: null;
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
      .pipe(delay(1))
      .subscribe(owner => { this.refreshOwner(owner) }
    )
  }

  refreshOwner(newOwner: Owner): void {
    this.owner = newOwner;
    this.getData(newOwner.id);
  }

  getData(id: number): void {
    let statsResponse = this.ownerService.getOwnerAllTimeStats(id);
    let teamResponse = this.teamService.getOwnerTeamsStatsView(id);
    // let ownerSeasons = this.seasonService.getOwnerSeasons(id);
    // let yearAverages = this.seasonService.getSeasonAverages();
    forkJoin([statsResponse, teamResponse]).subscribe(responseList => {
      this.allTimeStats = responseList[0];
      this.ownerTeams = responseList[1].sort((a,b) =>
        (a["id"] > b["id"]) ? 1 : ((b["id"] > a["id"]) ? -1 : 0))
      // console.log(responseList[2]);
      console.log("owner teams: ", this.ownerTeams);
    })
  }

  setStat(arr: Array<any>): void {
    this.stat = arr[0];
    this.yAxis = arr[1];
  }

  ngAfterViewInit() {
    console.log("owner detail view initialized");
    this.route.url.subscribe(url => {
      this.ownerService.getOwner(url[1])
        .pipe(delay(1))
        .subscribe(owner => { this.refreshOwner(owner) })
    })
  }

  ngOnDestroy() {
    console.log("owner detail destroyed");
  }

}
