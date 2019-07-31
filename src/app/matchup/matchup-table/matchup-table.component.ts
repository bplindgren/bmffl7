import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Owner } from '../../owner';
import { MatchupGame } from '../../matchupGame';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'matchup-table',
  templateUrl: './matchup-table.component.html',
  styleUrls: ['./matchup-table.component.css']
})
export class MatchupTableComponent implements OnInit {
  @Input() o1: Owner;
  @Input() o2: Owner;
  @Input() games: MatchupGame[];
  dataSource: any;
  displayedColumns: string[] = ['season', 'week', 'gameType', 'o1team', 'o1score', 'o2score', 'o2team'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.games = this.sortGames(this.games);
    // let addedColumns: string[] = [this.o1.firstName + " " + this.o1.lastInitial, 'o1score', this.o2.firstName + " " + this.o2.lastInitial, 'o2score'];
    //
    // this.displayedColumns = [ ...this.displayedColumns, ...addedColumns];

    console.log(this.displayedColumns);
    console.log(this.games);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Game>(this.sortGames(changes['games']['currentValue']));
    this.dataSource.paginator = this.paginator;
  }

  sortGames(games: MatchupGame[]): MatchupGame[] {
    if (games !== undefined) {
      return games.sort((a: MatchupGame, b: MatchupGame) => {
        (a.id > b.id) ? 1 : (b.id > a.id) ? -1 : 0 }
      );
    }
  }

}
