import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';
import { WeekScoresFormComponent } from '/week-scores-form/week-scores-form.ts';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-week-scores',
  templateUrl: './week-scores.component.html',
  styleUrls: ['./week-scores.component.css']
})
export class WeekScoresComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let params = this.route.snapshot.params
    this.gameService.getRecentFive(params['seasonId'], params['weekId']).subscribe(res => {
      this.games = res;
    })
  }

  openYearDropdown() {

  }

}
