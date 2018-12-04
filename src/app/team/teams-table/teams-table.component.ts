import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SeasonStats } from '../../seasonStats';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit, OnChanges {
  @Input() teams: SeasonStats[];
  dataSource: any;
  displayedColumns: string[] = ['year', 'name', 'standing', 'divisionwinner', 'gamesplayed', 'wins', 'losses', 'ties', 'winningpct', 'pointsfor', 'pointsagainst', 'pfpg', 'papg', 'ppgdiff'];
  tenTeams: boolean = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<SeasonStats>(this.teams);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.tenTeams = this.teams.length > 10;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<SeasonStats>(changes['teams']['currentValue']);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.tenTeams = this.teams.length > 10;
  }

  // updateTenTeams(): boolean {
  //   return
  // }
}
