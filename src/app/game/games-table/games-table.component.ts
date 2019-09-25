import { Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TeamGame } from '../../teamGame';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent implements OnInit, OnChanges {
  @Input() games: TeamGame[];
  dataSource: any;
  displayedColumns: string[] = ['week', 'gameType', 'home', 'opponent', 'division', 'result', 'pts', 'opp', 'w', 'l', 't', 'streak'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.games = this.sortGames(this.games);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<TeamGame>(this.sortGames(changes['games']['currentValue']));
    this.dataSource.paginator = this.paginator;
  }

  sortGames(games: TeamGame[]): TeamGame[] {
    if (games !== undefined) {
      let sortedGames: TeamGame[] = games.sort((a: TeamGame, b: TeamGame) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
      return sortedGames;
    }
  }

}
