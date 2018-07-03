import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Game } from '../game';
import { GameService } from '../game.service';

@Injectable()
export class WeekScoresResolver implements Resolve<Game[]> {
  constructor(private gameService: GameService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Game[]> {
    return this.gameService.getWeekGames(route.params['seasonId'], route.params['weekId']);
  }
}
