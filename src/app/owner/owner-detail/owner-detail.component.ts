import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { startWith, tap, delay } from 'rxjs/operators';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';
import { Team } from '../../team';
import { SeasonStats } from '../../seasonStats';
import { StatCardComponent } from '../stat-card/stat-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { VerticalBarChartComponent } from '../../charts/vertical-bar-chart/vertical-bar-chart.component';
import { TableModule } from '../../shared-modules/table/table.module';
import { AllTimeStats } from '../../allTimeStats';

@Component({
  selector: 'owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit, AfterViewInit {
  private owner: Owner;
  private stat: Array<any> = [
    { name: "2011", value: 0},
    { name: "2012", value: 0},
    { name: "2013", value: 0},
    { name: "2014", value: 0},
    { name: "2015", value: 0},
    { name: "2016", value: 0},
    { name: "2017", value: 0},
    { name: "2018", value: 0}
  ];
  private yAxis: string = "Wins";
  private allTimeStats: AllTimeStats;
  private ownerTeams: SeasonStats[];
  private show: boolean = false;

  constructor(
    private ownerService: OwnerService,
    private teamService: TeamService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.ownerService.getOwner(+(url[1]))
        // .pipe(delay(1))
        .subscribe(owner => {
          this.yAxis = "Wins";
          this.owner = owner;
          this.getData(owner.id);
         })
    })
  }

  getData(id: number): void {
    let statsResponse = this.ownerService.getOwnerAllTimeStats(id);
    let teamResponse = this.teamService.getOwnerTeamsStatsView(id);
    forkJoin([statsResponse, teamResponse]).subscribe(responseList => {
      console.log(responseList);
      this.allTimeStats = responseList[0];
      this.ownerTeams = responseList[1].sort((a,b) =>
        (a["id"] > b["id"]) ? 1 : ((b["id"] > a["id"]) ? -1 : 0));
      this.show = true;
    })
  }

  setStat(arr: Array<any>): void {
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
