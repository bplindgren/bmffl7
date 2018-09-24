import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../game.service';
import { Game } from '../../game';
import { Week } from '../../week';
import { MatCardModule } from '@angular/material/card';
import { TeamService } from '../../team/team-service/team.service';

@Component({
  selector: 'app-week-scores',
  templateUrl: './week-scores.component.html',
  styleUrls: ['./week-scores.component.css']
})
export class WeekScoresComponent implements OnInit {
  private season: number;
  private week: number;
  private seasons : number[] = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  private weeks : number[] = Array.apply(null, {length: 17}).map(Number.call, Number).splice(1);
  private games: Game[] = [];

  constructor(
    private gameService: GameService) {
      this.season = this.getYear();
      this.week = this.getWeek();
  }

  ngOnInit() {
    let w : Week = {
      season: this.season,
      week: this.week
    }
    this.getGames(w);
  }

  getGames(week: Week): void {
    this.gameService.getWeekGames(week.season, week.week)
      .subscribe((data: Game[]) => { this.games = data })
  }

  getYear(): number {
    let now = new Date();
    return now.getFullYear();
  }

  getWeek(): number {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let left = (Math.abs(now.getTime() - start.getTime()));
    let right = (Math.abs((start.getTimezoneOffset()- now.getTimezoneOffset()) * 60 * 1000));
    let sum = left + right;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(sum / oneDay);
    let week = Math.floor(day / 7) - 35;
    return (week < 0) ?  1 : week;
  }

}
