import { Component, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SeasonStats } from '../../seasonStats';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnChanges {
  @Input() teams: SeasonStats[];
  dataSource: any;
  displayedColumns: string[] = ['year', 'name', 'standing', 'divisionwinner', 'gamesplayed', 'wins', 'losses', 'ties', 'winningpct', 'pointsfor', 'pointsagainst', 'pfpg', 'papg', 'ppgdiff'];
  public hideTeams: boolean = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<SeasonStats>(changes['teams']['currentValue']);
    // console.log(this.dataSource);
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
