import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ItemServices } from './item-list/item-list.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'pm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ItemServices ]
})
export class AppComponent {
  // items: Observable<any[]>;
  // constructor(public db: AngularFirestore) {
  //   this.items = db.collection('items').valueChanges();
  //   this.items.subscribe(data => console.log('userData', data)
  //   );
  // }
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor( private _firebaseAuth: AngularFireAuth, public authService: AuthService) {
    this.user = _firebaseAuth.authState;
   }
   logout() {
    this.authService.logout();
  }
}
