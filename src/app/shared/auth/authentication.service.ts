import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {SignupRequest} from '../model/signup-request.model';

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
                    const tokenStr = userData.access_token;
                    localStorage.setItem('token', tokenStr);
                    return userData;

                }
            )
        );
    }

    createAccount(username, password) {
        const signupRequest = new SignupRequest(username, password)
        return this.httpClient.post('http://localhost:8080/sign-up', signupRequest)
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        return !(token === null);
    }

    logOut() {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
}
