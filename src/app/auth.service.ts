import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  user: Observable<firebase.User>;
  loginError;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.loginError = firebaseAuth.auth;
  }
  canActivate(): Observable<boolean> {
    return this.firebaseAuth.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      });
  }
  // signup(email: string, password: string) {
  //   this.firebaseAuth
  //     .auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(value => {
  //       console.log('Success!', value);
  //     })
  //     .catch(err => {
  //       console.log('Something went wrong:', err.message);
  //     });
  // }
  signup(email, password): Observable<any> {
    return Observable.fromPromise (
      this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }

  login(email, password): Observable<any> {
    return Observable.fromPromise (
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    );
    // this.firebaseAuth
    //   .auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(value => {
    //       this.router.navigateByUrl('/welcome');
    //   })
    //   .catch(err => {
    //     console.log('Something went wrong:', err.message);
    //   });
  }
  loginWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider())
      .then(value => {
        this.router.navigateByUrl('/welcome');
    })
    .catch(err => {
      console.log('Something went wrong:', err.message);
    });
  }
  loginWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider())
      .then(value => {
        this.router.navigateByUrl('/welcome');
    })
    .catch(err => {
      console.log('Something went wrong:', err.message);
    });
  }
  loginWithGitHub() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider())
      .then(value => {
        this.router.navigateByUrl('/welcome');
    })
    .catch(err => {
      console.log('Something went wrong:', err.message);
    });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      this.router.navigateByUrl('/login');
  }

}
