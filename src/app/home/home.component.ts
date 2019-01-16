import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { recentGames } from '../test-objects/games/recentGames';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public recent: Game[] = recentGames;

  constructor() { }

  ngOnInit() {
    console.log(this.recent);
  }

}
