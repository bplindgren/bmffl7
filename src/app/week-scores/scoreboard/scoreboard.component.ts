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
    console.log(changes);
    this.week !== 0 ? this.getWeekGames() : this.getPlayoffGames()
  }

  getWeekGames(): void {
    this.gameService.getWeekGames(this.season, this.week).subscribe((res: Game[]) => {
      console.log(res)
      this.games = res
    });
  }

  getPlayoffGames(): void {
    this.gameService.getPlayoffGames(this.season-2010).subscribe((res: Game[]) => {
      this.games = res
    })
  }

  sortGames(games: Game[]) {
    console.log(games)
    return games.sort((a: Game, b: Game) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
  }

}
