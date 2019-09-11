import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';
import { SeasonStats } from '../../seasonStats';
import { MatGridListModule } from '@angular/material/grid-list';
import { VerticalBarChartComponent } from '../../charts/vertical-bar-chart/vertical-bar-chart.component';
import { TableModule } from '../../shared-modules/table/table.module';
import { AllTimeStats } from '../../allTimeStats';

@Component({
  selector: 'owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit, OnDestroy {
  public owner: Owner;
  public stat: Array<any> = [
    { name: "2011", value: 0 },
    { name: "2012", value: 0 },
    { name: "2013", value: 0 },
    { name: "2014", value: 0 },
    { name: "2015", value: 0 },
    { name: "2016", value: 0 },
    { name: "2017", value: 0 },
    { name: "2018", value: 0 },
    { name: "2019", value: 0 }
  ];
  public yAxis: string = "Wins";
  public allTimeStats: AllTimeStats;
  public ownerTeams: SeasonStats[];
  public show: boolean = false;
  public sub: Subscription;

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.sub = this.route.url.subscribe(url => {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.ownerService.getOwner(+(params['id']))
          .subscribe(owner => { this.owner = owner })
      }
    })
  }

  updateGrid(arr: Array<any>): void {
    this.stat = arr[0];
    this.yAxis = arr[1];
    this.show = true;
  }

  updateTeams(teams: SeasonStats[]) {
    this.ownerTeams = teams;
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
