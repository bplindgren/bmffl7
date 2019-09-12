import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
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
  public dataSource: any;
  displayedColumns: string[] = ['year', 'name', 'standing', 'divisionwinner', 'gamesplayed', 'wins', 'losses', 'ties', 'winningpct', 'pointsfor', 'pointsagainst', 'pfpg', 'papg', 'ppgdiff'];
  public hideTeams: boolean = true;
  @Input() public stat: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<SeasonStats>(changes['teams']['currentValue'].sort((a: SeasonStats, b: SeasonStats) => (a[this.stat] > b[this.stat]) ? 1 : ((b[this.stat] > a[this.stat]) ? -1 : 0)));

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.hideTeams = this.setTenTeams();
  }

  setTenTeams(): boolean {
    return this.dataSource.data.length > 10;
  }
}
