import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Season } from '../../season';
import { Team } from '../../team';
import { SeasonStats } from '../../seasonStats';
import { Record } from '../../record';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private baseURL = 'https://bmffl-spring-boot.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<Team[]> {
    const url = `${this.baseURL}` + '/teams';
    return this.http.get<Team[]>(url).pipe(
      tap(_ => console.log('all teams fetched'))
    )
  }

  getTeamRecord(team: number, week: number): Observable<Record> {
    const url = `${this.baseURL}` + '/teams/record/' + team + '/' + week;
    return this.http.get<Record>(url).pipe(
      tap(_ => console.log('teams records retrieved'))
    )
  }

  getOwnerTeams(ownerID: number): Observable<Team[]> {
    const url = `${this.baseURL}` + '/teams/owner/' + ownerID;
    return this.http.get<Team[]>(url).pipe(
      tap(_ => console.log('owner teams received'))
    )
  }

  getTeamSeasonStatsView(teamId: number): Observable<SeasonStats> {
    const url = `${this.baseURL}` + '/teams/stats/' + teamId;
    return this.http.get<SeasonStats>(url).pipe(
      tap(_ => console.log('team stats received'))
    )
  }

  getOwnerTeamsStatsView(ownerId: number): Observable<SeasonStats[]> {
    const url = `${this.baseURL}` + '/teams/owner/stats/' + ownerId;
    return this.http.get<SeasonStats[]>(url).pipe(
      tap(_ => console.log('owner team stats received'))
    )
  }

  getAllTeamsStatsView(): Observable<SeasonStats[]> {
    const url = `${this.baseURL}` + '/teams/seasonStats';
    return this.http.get<SeasonStats[]>(url).pipe(
      tap(_ => console.log('owner team stats received'))
    )
  }

  getSeasonTeams(seasonId: number): Observable<SeasonStats[]> {
    const url =`${this.baseURL}` + '/teams/getSeasonTeams/' + seasonId;
    return this.http.get<SeasonStats[]>(url).pipe(
      tap(_ => console.log('season teams received'))
    )
  }

}
