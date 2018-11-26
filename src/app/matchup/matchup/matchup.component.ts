import { Component, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormsModule, NgForm, FormControl } from '@angular/forms';
import { Game } from '../../game';
import { GameService } from '../../game/game-service/game.service';
import { GamesTableComponent } from '../../game/games-table/games-table.component';
import { Owner } from '../../owner';
import { MatchupStats } from '../../matchupStats';
import { TeamService } from '../../team/team-service/team.service';
import { SeasonStats } from '../../seasonStats';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.css']
})
export class MatchupComponent implements OnChanges {
  private owner1: Owner;
  private owner2: Owner;
  private games: Game[] = null;
  private matchupStats: MatchupStats;
  private owner1stats: SeasonStats[];
  private owner2stats: SeasonStats[];
  private statsArray: Array<string> = ['Games_Played', 'Wins', 'Losses', 'Ties', 'Winning_Percentage', 'Regular_Season_Wins', 'Regular_Season_Losses', 'Points_For', 'Points_Against', 'Point_Differential', 'Points_For_Per_Game', 'Points_Against_Per_Game', 'Points_Per_Game_Differential'];
  private statControl = new FormControl();
  private stats: Object = {
    Games_Played: 'gamesplayed',
    Wins: 'wins',
    Losses: 'losses',
    Ties: 'ties',
    Winning_Percentage: 'winningpct',
    Regular_Season_Wins: 'winsregseason',
    Regular_Season_Losses: 'lossesregseason',
    Points_For: 'pointsfor',
    Points_Against: 'pointsagainst',
    Point_Differential: 'pointdifferential',
    Points_For_Per_Game: 'pfpg',
    Points_Against_Per_Game: 'papg',
    Points_Per_Game_Differential: 'ppgdiff'
  };
  private displayedStat: string = 'Wins';
  private graphData: any[];

  constructor(
    private gameService: GameService,
    private teamService: TeamService
  ) { }

  getMatchupStats(e: Owner[]): void {
    this.owner1 = e[0];
    this.owner2 = e[1];
    let gamesRequest = this.gameService.getMatchupStats(this.owner1.id, this.owner2.id);
    let owner1stats = this.teamService.getOwnerTeamsStatsView(this.owner1.id);
    let owner2stats = this.teamService.getOwnerTeamsStatsView(this.owner2.id);
    forkJoin([gamesRequest, owner1stats, owner2stats]).subscribe(responseList => {
      this.games = responseList[0]['games'];
      this.matchupStats = responseList[0];
      this.owner1stats = this.sortSeasonStats(responseList[1]);
      this.owner2stats = this.sortSeasonStats(responseList[2]);
      this.updateChart(this.displayedStat);
    })
  }

  getNewStat(e: string): void {
    this.updateChart(e['value']);
  }

  updateChart(stat: string): void {
    let owner1values = this.formatOwnerStats(this.owner1stats, stat);
    let owner2values = this.formatOwnerStats(this.owner2stats, stat);

    let adjustArray: number[] = [0, 0, 0, 0];
    if (this.owner1.id == 9) {
      owner1values = [...owner1values, ...adjustArray];
    } else if (this.owner2.id == 9) {
      owner2values = [...owner2values, ...adjustArray];
    }

    if (this.owner1.id == 11) {
      owner1values = [...adjustArray, ...owner1values];
    } else if (this.owner2.id == 11) {
      owner2values = [...adjustArray, ...owner2values];
    }

    this.graphData = [
      { data: owner1values, label: (this.owner1.firstName + " " + this.owner1.lastInitial) },
      { data: owner2values, label: (this.owner2.firstName + " " + this.owner2 .lastInitial) }
    ];
  }

  sortSeasonStats(seasonStats: SeasonStats[]): SeasonStats[] {
    return seasonStats
      .sort((a,b) =>
        (a['id'] > b['id']) ? 1 : ((b['id'] > a['id']) ? -1 : 0)
      );
  }

  formatOwnerStats(ownerSeasonStats: SeasonStats[], value: string): any[] {
    return ownerSeasonStats.map(s => s[this.stats[value]] )
  }

  removeUnderScore(s: string): string {
    return s.replace(/_/g, " ");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}