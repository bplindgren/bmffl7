import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
export class OwnerDetailComponent implements OnInit {
  public owner: Owner;
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
  public ownerTeams: SeasonStats[];
  public show: boolean = false;

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.ownerService.getOwner(+(url[1])).subscribe(owner => {
        this.owner = owner
      })
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

}
