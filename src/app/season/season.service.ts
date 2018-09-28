import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Season } from '../season';

@Injectable({ providedIn: 'root' })
export class SeasonService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getOwnerSeasons(ownerID: number): Observable<String> {
    const url = `${this.baseURL}` + '/season/getOwnerSeasons/' + ownerID;
    console.log(url);
    return this.http.get<String>(url).pipe(
      tap(_ => console.log('owner seasons received'))
    )
  }

}
