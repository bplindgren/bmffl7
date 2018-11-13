import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Game } from './game';

@Injectable({ providedIn: 'root' })
export class GameService {
  private baseURL = 'http://localhost:8080';
  private games: Game[] = [];

  constructor(private http: HttpClient) { }

  getWeekGames(seasonId: number, week: number): Observable<Game[]> {
    const url = `${this.baseURL}` + '/games/season/' + seasonId + '/week/' + week
    return this.http.get<Game[]>(url).pipe(
      tap(_ => console.log('games retreived'))
    );
  }

  getPlayoffGames(seasonId: number): Observable<Game[]> {
    const url = `${this.baseURL}` + '/games/season/playoffs/' + seasonId
    return this.http.get<Game[]>(url).pipe(
      tap(_ => console.log('games received'))
    );
  }

}
