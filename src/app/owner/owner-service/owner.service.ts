import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Owner } from '../../owner';
import { AllTimeStats } from '../../allTimeStats';

@Injectable({ providedIn: 'root' })
export class OwnerService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllOwners(): Observable<Owner[]> {
    const url = `${this.baseURL}` + '/owners';
    return this.http.get<Owner[]>(url).pipe(
      tap(_ => console.log('all owners fetched'))
    )
  }

  getOwner(id: Integer): Observable<Owner> {
    const url = `${this.baseURL}` + '/owners/' + id;
    return this.http.get<Owner>(url).pipe(
      tap(_ => console.log('fetched owner with id=' + `${id}`))
    )
  }

  getAllTimeStats(): Observable<AllTimeStats[]> {
    const url = `${this.baseURL}` + '/owners/getAllTimeStats';
    return this.http.get<number[]>(url).pipe(
      tap(_ => console.log('fetched all owner all-time stats'))
    )
  }

  getOwnerAllTimeStats(id: number): Observable<AllTimeStats> {
    const url = `${this.baseURL}` + '/owners/getOwnerAllTimeStats/' + id;
    return this.http.get<AllTimeStats>(url).pipe(
      tap(_ => console.log('fetched all time owner stats'))
    )
  }

}
