import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../game/game-service/game.service';
import { Game } from '../../game';
import { Week } from '../../week';
import { MatCardModule } from '@angular/material/card';
import { TeamService } from '../../team/team-service/team.service';
import { WeekScoresFormComponent } from '../week-scores-form/week-scores-form.component';

@Component({
  selector: 'week-scores',
  templateUrl: './week-scores.component.html',
  styleUrls: ['./week-scores.component.css']
})
export class WeekScoresComponent implements OnInit {
  public season: number;
  public week: number;
  public games: Game[];

  constructor(public gameService: GameService) { }

  ngOnInit() {
    // Get Season
    this.season = this.getYear();

    // ----- Get Week -----
    // epoch day for beginning of year
    let yearFirstDay = Math.floor(new Date().setFullYear(new Date().getFullYear(), 0, 1) / 86400000);

    // number of days since epoch
    let today = Math.ceil((new Date().getTime()) / 86400000);

    let dayOfYear = today - yearFirstDay
    this.week = this.getWeek(dayOfYear)

    // Get week games
    let w : Week = {
      season: this.season,
      week: this.week
    }
    this.getGames(w);
  }

  getYear(): number {
    let now = new Date();
    return now.getFullYear();
  }

  getWeek(dayOfYear: number): number {
    let week = Math.floor(dayOfYear / 7) - 34;
    if (week < -4) {
      this.season = this.season - 1;
      return 16
    } else if (week >= -4 && week <= 1) {
      return 1;
    } else if (week > 16) {
      return 16;
    } else {
      return week;
    }
  }

  getGames(week: Week): void {
    this.gameService.getWeekGames(week.season, week.week)
      .subscribe((data: Game[]) => { this.games = data })
  }

}
