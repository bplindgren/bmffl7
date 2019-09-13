import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, forkJoin } from 'rxjs';
import { GameService } from '../../game/game-service/game.service';
import { TeamService } from '../team-service/team.service';
import { ActivatedRoute } from '@angular/router';
import { GamesTableComponent } from '../../game/games-table/games-table.component';
import { TeamsTableComponent } from '../teams-table/teams-table.component';
import { TeamGame } from '../../teamGame';
import { SeasonStats } from '../../seasonStats';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit, OnDestroy {
  public teamId: number;
  public games: TeamGame[];
  public teamStats: SeasonStats[];
  public sub: Subscription;

  constructor(
    private gameService: GameService,
    private teamService: TeamService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.teamId = params['id'];
        this.getTeamInfo();
      }
    })
  }

  getTeamInfo() {
    let gamesResponse = this.gameService.getTeamGames(this.teamId);
    let teamStatsResponse = this.teamService.getTeamSeasonStatsView(this.teamId);

    forkJoin([gamesResponse, teamStatsResponse]).subscribe(responseList => {
      this.games = responseList[0];
      this.teamStats = [responseList[1]];
    })
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
