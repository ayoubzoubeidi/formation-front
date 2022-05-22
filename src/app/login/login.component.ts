import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/auth/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username = ''
    password = ''
    invalidLogin = false
    createAccount = false

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {

    }

    checkLogin() {

        if (!this.createAccount) {
            this.login();
        } else {
            this.authenticationService.createAccount(this.username, this.password).subscribe(
                () => {
                    this.login();
                }
            )
        }

    }

    login() {
        this.authenticationService.authenticate(this.username, this.password).subscribe(
            data => {
                this.router.navigate(['dashboard']);
                this.invalidLogin = false;
            },
            error => {
                this.invalidLogin = true;

            }
        );
    }


    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
