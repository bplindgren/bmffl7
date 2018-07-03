import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-week-scores',
  templateUrl: './week-scores.component.html',
  styleUrls: ['./week-scores.component.css']
})
export class WeekScoresComponent implements OnInit {
  @Input() season: String;
  @Input() week: String;
  private seasons = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
  private weeks = Array.apply(null, {length: 17}).map(Number.call, Number).splice(1);

  games: Game[] = [];

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router) {
      console.log("week-scores constructed")
  }

  ngOnInit() {
    let params = this.route.snapshot.params
    this.season = params['seasonId']
    this.week = params['weekId']
    console.log(this)
    this.gameService.getWeekGames(this.season, this.week).subscribe(res => {
      this.games = res;
    })
  }

  onClickMe() {
    console.log("clicked");
  }

  setGames(season: String, week: String) {
    this.router.navigate(['/'])
    this.router.navigate(['scores/season/' + season + '/week/' + week]);
    this.gameService.getWeekGames(season, week).subscribe(res => {
      this.games = res;
      console.log(this.games)
    })
  }

}
