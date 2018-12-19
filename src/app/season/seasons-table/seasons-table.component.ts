import { Component, Input, ViewChild, AfterViewInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Season } from '../../season';
import { DataSource } from '@angular/cdk/table';

import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'seasons-table',
  templateUrl: './seasons-table.component.html',
  styleUrls: ['./seasons-table.component.css'],
  animations: []
})
export class SeasonsTableComponent implements OnChanges {
  @Input() seasons: Season[];
  dataSource: any;
  displayedColumns: string[] = ['year', 'champion', 'owner', 'division', 'divisionwinner', 'wins', 'losses', 'ties', 'pointsfor', 'pointsagainst', ];

  @ViewChild(MatSort) sort: MatSort;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Season>(this.seasons);
    this.dataSource.sort = this.sort;
  }

}
