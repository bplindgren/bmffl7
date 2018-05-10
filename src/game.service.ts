import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseURL = 'http://localhost:8080';
  private games: Game[] = [];

  constructor(private http: HttpClient) { }

  getRecentFive(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseURL}` + '/games/recent').pipe(
      tap(_ => console.log('games retreived'))
    );
  }
}
