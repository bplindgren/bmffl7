import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TeamService } from '../../team/team-service/team.service'

@Injectable()
export class ScorecardResolver implements Resolve<number[]> {
  constructor(private teamService: TeamService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<number[]> {
    return this.teamService.getTeamRecord(route.params['awayTeamId'], route.params['week'])
  }
}
