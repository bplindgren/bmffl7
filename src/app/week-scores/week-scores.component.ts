import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-week-scores',
  templateUrl: './week-scores.component.html',
  styleUrls: ['./week-scores.component.css']
})
export class WeekScoresComponent implements OnInit {
  recentFive: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getRecentFive();
  }

  getRecentFive() {
    this.gameService.getRecentFive().subscribe(games => {
      this.recentFive = games;
    })
  }
}
