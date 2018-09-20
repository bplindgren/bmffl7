import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { GameService } from '../../game.service';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { Game } from '../../game';
import { Week } from '../../week';
import { MatCardModule } from '@angular/material/card';
import { TeamService } from '../../team/team-service/team.service';

@Component({
  selector: 'app-week-scores',
  templateUrl: './week-scores.component.html',
  styleUrls: ['./week-scores.component.css']
})
export class WeekScoresComponent implements OnInit, AfterContentInit {
  @Input() season: String;
  @Input() week: String;
  private seasons = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
  private weeks = Array.apply(null, {length: 17}).map(Number.call, Number).splice(1);

  games: any[] = [];

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let params = this.route.snapshot.params
    this.season = params['seasonId']
    this.week = params['weekId']
    this.route.data.subscribe((data: { games: Game[] }) => {
      console.log("getting games: ", data);
      this.games = data['games'];
    })
  }

  getGames($event) {
    console.log('week');
    console.log($event.season);
    this.gameService.getWeekGames($event.season, $event.week)
      .subscribe((data: Game[]) => {
        console.log(data)
        this.games = data;
      }
    )
  }

  ngAfterContentInit() {
    console.log("week scores component: ", this)
  }

  getYear() {
    let now = new Date();
    return now.getFullYear();
  }

  getWeek() {
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
