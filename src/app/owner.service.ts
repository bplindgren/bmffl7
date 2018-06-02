import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Owner } from './owner';

@Injectable({ providedIn: 'root' })
export class OwnerService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getOwnerNames(division: string): Observable<Owner[]> {
    console.log(`${this.baseURL}` + '/owners/' + division);
    return this.http.get<Owner[]>(`${this.baseURL}` + '/owners/' + division).pipe(
      tap(_ => console.log(division + ' owners received'))
    )
  }

  getAllOwners(): Observable<Owner[]> {
    console.log(`${this.baseURL}` + '/owners');
    return this.http.get<Owner[]>(`${this.baseURL}` + '/owners').pipe(
      tap(_ => console.log(' all owners received'))
    )
  }
}
