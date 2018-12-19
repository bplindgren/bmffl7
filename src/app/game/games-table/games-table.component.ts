import { Component, Input, ViewChild, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Game } from '../../game';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent implements OnChanges {
  @Input() games: Game[];
  dataSource: any;
  displayedColumns: string[] = ['year', 'week', 'gametype', 'awayteam', 'hometeam', 'awayscore', 'homescore'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Game>(changes['games']['currentValue']);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
