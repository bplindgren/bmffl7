import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Owner } from '../../owner';

@Injectable({ providedIn: 'root' })
export class OwnerService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getOwnerNames(division: string): Observable<Owner[]> {
    const url = `${this.baseURL}` + '/owners/division/' + division;
    return this.http.get<Owner[]>(url).pipe(
      tap(_ => console.log(division + ' owners received'));
    )
  }

  getAllOwners(): Observable<Owner[]> {
    const url = `${this.baseURL}` + '/owners';
    return this.http.get<Owner[]>(url).pipe(
      tap(_ => console.log('all owners fetched'))
    )
  }

  getOwner(name: String): Observable<Owner> {
    const url = `${this.baseURL}` + '/owners/' + name;
    return this.http.get<Owner>(url).pipe(
      tap(_ => console.log('fetched owner name=${name}'))
    )
  }

}
