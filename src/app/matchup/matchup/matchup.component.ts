import { Component } from '@angular/core';
import { Game } from '../../game';
import { GameService } from '../../game.service';
import { GamesTableComponent } from '../../game/games-table/games-table.component';
import { Owner } from '../../owner';
import { OwnerService } from '../../owner/owner-service/owner.service';
import { AllTimeStats } from '../../allTimeStats';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.css']
})
export class MatchupComponent {
  private owner1: Owner;
  private owner2: Owner;
  private games: Game[] = null;
  private owner1stats: AllTimeStats;
  private owner2stats: AllTimeStats;
  // private gameType: string = "allGames";
  // private displayedGames: Game[];
  // private matchupHistory: matchupHistoryStats;

  constructor(
    private gameService: GameService,
    private ownerService: OwnerService
  ) { }

  getMatchupStats(e: Owner[]): void {
    console.log(e);
    this.owner1 = e[0];
    this.owner2 = e[1];
    let gamesRequest = this.gameService.getMatchupGames(this.owner1.id, this.owner2.id);
    let owner1stats = this.ownerService.getOwnerAllTimeStats(this.owner1.id);
    let owner2stats = this.ownerService.getOwnerAllTimeStats(this.owner2.id);
    forkJoin([gamesRequest, owner1stats, owner2stats]).subscribe(responseList => {
      this.games = responseList[0];
      this.owner1stats = responseList[1];
      this.owner2stats = responseList[2];
    })
  }

  // changeGames(e: string): void {
  //   this.gameType = e['value'];
  //   let types : Object = {
  //     allGames: string[] = ["Regular Season", "Quarter Final", "Semi Final", "Super Bowl", "Consolation Game"],
  //     regularSeason: string[] = ["Regular Season"],
  //     regAndPlayoffs: string[] = ["Regular Season", "Quarter Final", "Semi Final", "Super Bowl", "Consolation Game"],
  //     playoffs: string[] = ["Quarter Final", "Semi Final", "Super Bowl"]
  //   }
  //   let filter = types[this.gameType];
  //   this.displayedGames = this.games.filter(g => filter.includes(g.gametype));
  //   console.log(this.displayedGames);
  // }

}
