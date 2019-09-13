import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { User } from '../../user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseURL = 'http://localhost:8080';
  @Output() getLoggedInUser: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    const url = `${this.baseURL}` + '/users';
    return this.http.get<User[]>(url).pipe(
      tap(_ => console.log('all owners fetched'))
    )
  }

  login(user:User): Observable<any> {
    const headers = new HttpHeaders(user ?{
      authorization:'Basic ' + btoa(user.username + ':' + user.password)
    }:{});

    const url = `${this.baseURL}` + '/users/login';
    return this.http.get<any>(url, {headers:headers})
    .pipe(map(response => {
      if(response){
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.getLoggedInUser.emit(response['username']);
      }
      return response;
    }));
  }

  register(user: User): Observable<any> {
    return this.http.post(this.baseURL + '/users/register', JSON.stringify(user), {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  logOut(): Observable<any> {
    return this.http.post(this.baseURL + '/users/logout', {})
    .pipe(map(response => {
      localStorage.removeItem('currentUser');
      this.getLoggedInUser.emit('');
    }));
  }

  getUserInfo(username: string): Observable<User> {
    const url = `${this.baseURL}` + '/users/user/' + username;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log('owner fetched'))
    )
  }

}
