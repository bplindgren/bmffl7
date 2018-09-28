import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Team } from '../../team';

@Injectable({  providedIn: 'root' })
export class TeamService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTeamRecord(team: number, week: number): Observable<number[]> {
    const url = `${this.baseURL}` + '/teams/record/' + team + '/' + week
    return this.http.get<number[]>(url).pipe(
      tap(_ => console.log('teams records retrieved'))
    )
  }

}
