import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { GameService } from '../../game.service';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { Game } from '../game';
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

  ngAfterContentInit() {
    console.log("week scores component: ", this)
  }

}
