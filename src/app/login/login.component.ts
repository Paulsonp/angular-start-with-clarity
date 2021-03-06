import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg: string;
  error: any;
    email: string;
    password: string;

    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    constructor(private _firebaseAuth: AngularFireAuth, private router: Router, public authService: AuthService) {
      this.user = _firebaseAuth.authState;
      this.user.subscribe(
          (user) => {
            if (user) {
              this.userDetails = user;
              console.log(this.userDetails);
            } else {
              this.userDetails = null;
            }
          }
        );
    }

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.email, this.password)
    .subscribe(
      success => this.router.navigateByUrl('/welcome'),
      error => {
        if (error) {
          this.errorMsg = error.message;
        } else {
          console.log('Welcome');
        }
      }
    );
  }
  login() {
    this.authService.login(this.email, this.password)
    .subscribe(
      success => this.router.navigateByUrl('/welcome'),
      error => {
        if (error) {
          this.errorMsg = error.message;
        } else {
          console.log('Welcome');
        }
      }
    );
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl ('/login');
  }
  signInWithFacebook() {
    this.authService.loginWithFacebook();
  }
  signInWithGoogle() {
    this.authService.loginWithGoogle();
  }
  signInWithGitHub() {
    this.authService.loginWithGitHub();
  }

}
