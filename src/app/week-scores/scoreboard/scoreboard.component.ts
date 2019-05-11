import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Game } from '../../game';
import { GameService } from '../../game/game-service/game.service';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnChanges {
  @Input() season: number;
  @Input() week: number;
  public games: Game[];

  constructor(public gameService: GameService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.week !== 0 ? this.getGames() : this.getPlayoffGames()
  }

  getGames(): void {
    this.gameService.getWeekGames(this.season, this.week)
      .subscribe((data: Game[]) => { this.games = this.sortGames(data) })
  }

  getPlayoffGames(): void {
    this.gameService.getPlayoffGames(this.season-2010).subscribe(games => {
      this.games = games;
    })
  }

  sortGames(games: Game[]): Game[] {
    if (games !== undefined) {
      return games.sort((a: Game, b: Game) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    } else {
      return games;
    }
  }

}
