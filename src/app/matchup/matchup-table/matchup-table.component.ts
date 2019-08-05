import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Owner } from '../../owner';
import { MatchupGame } from '../../matchupGame';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'matchup-table',
  templateUrl: './matchup-table.component.html',
  styleUrls: ['./matchup-table.component.css']
})
export class MatchupTableComponent implements OnChanges {
  @Input() o1: Owner;
  @Input() o2: Owner;
  @Input() games: MatchupGame[];
  dataSource: any;
  displayedColumns: string[] = ['season', 'week', 'gameType', 'o1team', 'o1score', 'o2score', 'o2team'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(changes: SimpleChanges) {
    // this.dataSource = new MatTableDataSource<MatchupGame>(this.sortGames(changes['games']['currentValue']));
    this.dataSource = new MatTableDataSource<MatchupGame>(this.games);
    this.dataSource.paginator = this.paginator;
  }

  // sortGames(games: MatchupGame[]): MatchupGame[] {
  //   if (games !== undefined) {
  //     return games.sort((a: MatchupGame, b: MatchupGame) => {
  //       (a.id > b.id) ? 1 : (b.id > a.id) ? -1 : 0 }
  //     );
  //   }
  // }

}
