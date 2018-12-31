import { Component, Input, ViewChild, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Game } from '../../game';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent implements OnInit, OnChanges {
  @Input() games: Game[];
  dataSource: any;
  displayedColumns: string[] = ['year', 'week', 'gametype', 'awayteam', 'hometeam', 'awayscore', 'homescore'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.games = this.sortGames(this.games);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.paginator = this.paginator;
  }

  sortGames(games: Game[]): Game[] {
    return games.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
  }

}
