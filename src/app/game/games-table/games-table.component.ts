import { Component, AfterViewInit, Input } from '@angular/core';
import { Game } from '../../game';

@Component({
  selector: 'games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent implements AfterViewInit {
  @Input() games: Game[];
  @Input() datasource;
  displayedColumns: string[] = ['year', 'week', 'gametype', 'awayteam', 'hometeam', 'awayscore', 'homescore'];

  constructor() { }

  ngAfterViewInit() {
    console.log('games table created', this.games);
  }

}
