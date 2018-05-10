import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bmffl6';
  recentFive: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getRecentFive()
  }

  getRecentFive() {
    this.gameService.getRecentFive().subscribe((games) => {
      console.log(games)
      this.recentFive = games})
    console.log('hi')
  }
}
