import { Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
  displayedColumns: string[] = ['week', 'gameType', 'home', 'opponent', 'division', 'result', 'pts', 'opp', 'w', 'l', 't', 'streak'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.games = this.sortGames(this.games);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Game>(this.sortGames(changes['games']['currentValue']));
    this.dataSource.paginator = this.paginator;
  }

  sortGames(games: Game[]): Game[] {
    if (games !== undefined) {
      return games.sort((a: Game, b: Game) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    }
  }

}
