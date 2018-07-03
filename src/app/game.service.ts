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

  getWeekGames(year: String, week: String): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseURL}` + '/games/season/' + year + '/week/' + week).pipe(
      tap(_ => console.log('games retreived'))
    );
  }

}
