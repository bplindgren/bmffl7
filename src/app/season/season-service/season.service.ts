import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Season } from '../../season';
import { SeasonAverages } from '../../seasonAverages';

@Injectable({ providedIn: 'root' })
export class SeasonService {
  private baseURL = 'https://bmffl-spring-boot.herokuapp.com';
  // public baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getSeasons(): Observable<Season[]> {
    const url = `${this.baseURL}` + '/seasons';
    return this.http.get<Season[]>(url).pipe(
      tap(_ => console.log('seasons received'))
    )
  }

  getSeasonAverages(): Observable<SeasonAverages[]> {
    const url = `${this.baseURL}` + '/seasons/averages';
    return this.http.get<SeasonAverages[]>(url).pipe(
      tap(_ => console.log('all stats fetched'))
    )
  }

}
