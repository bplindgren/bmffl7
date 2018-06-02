import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  recentFive: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getRecentFive();
  }

  getRecentFive() {
    this.gameService.getRecentFive().subscribe((games) => {
      console.log(games)
      this.recentFive = games
    })
  }

}
