import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Entry } from '../../entry';

@Injectable({ providedIn: 'root' })
export class EntryService {
  private baseURL = 'https://bmffl-spring-boot.herokuapp.com';
  // public baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllEntries(): Observable<Entry[]> {
    const url = `${this.baseURL}` + '/entry/all';
    return this.http.get<Entry[]>(url).pipe(
      tap(_ => console.log('all entries fetched'))
    )
  }

  postEntry(newEntry: Entry): Observable<any> {
    return this.http.post(
      this.baseURL + '/entry/create',
      JSON.stringify(newEntry),
      { headers: {"Content-Type": "application/json; charset=UTF-8"}}
    );
  }

  deleteEntry(id: number): Observable<any> {
    const url = `${this.baseURL}` + '/entry/delete/' + id;
    return this.http.delete(url,
      { headers: {"Content-Type": "application/json; charset=UTF-8"}}
    );
  }

}
