import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

export class User {
  constructor(
    public status: string,
  ) {
  }

}

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient, 
    private router: Router
  ) {
  }

  authenticate(username, password) {

    const params: HttpParams = new HttpParams().set('username', username).set('password', password)

    return this.httpClient.post<any>('http://localhost:8080/login', null, {params: params}).pipe(
      map(
        userData => {
          localStorage.setItem('username', username);
          let tokenStr = userData.access_token;
          localStorage.setItem('token', tokenStr);
          return userData;

        }
      )
    );
  }


  isUserLoggedIn() {
    let token = localStorage.getItem('token');
    return !(token === null);
  }

  logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
