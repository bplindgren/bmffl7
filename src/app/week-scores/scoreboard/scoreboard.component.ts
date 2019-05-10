import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Game } from '../../game';
import { GameService } from '../../game/game-service/game.service';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit, OnChanges {
  @Input() season: number;
  @Input() week: number;

  constructor(public gameService: GameService) { }

  ngOnInit() {
    console.log(this.season, this.week)
    this.getGames()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getWeekGames(this.season, this.week)
      .subscribe((data: Game[]) => { this.games = data })
  }

  sortGames(games: Game[]): Game[] {
    if (games !== undefined) {
      return games.sort((a: Game, b: Game) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    } else {
      return games;
    }
  }

}
