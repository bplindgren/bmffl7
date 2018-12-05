import { Component, OnInit, Input, ViewChild, AfterViewInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
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
  public hideTeams: boolean = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<SeasonStats>(this.teams);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.hideTeams = this.setTenTeams();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<SeasonStats>(changes['teams']['currentValue']);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.hideTeams = this.setTenTeams();
  }

  setTenTeams(): boolean {
    return this.dataSource.data.length > 10;
  }

  ngAfterViewInit() {
    this.hideTeams = this.dataSource.data.length > 10;
  }
}
