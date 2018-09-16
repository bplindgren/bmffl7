import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { GameService } from '../../game.service';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { Game } from '../../game';
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
