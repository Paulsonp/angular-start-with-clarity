import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemFilterPipe } from './item-list/item-list-filter-pipe';
import { StarComponent } from './shared/star.component';
import { ItemDetailsComponent } from './item-list/item-details/item-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemFilterPipe,
    StarComponent,
    ItemDetailsComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'items', component: ItemListComponent, canActivate: [AuthService], pathMatch: 'full'  },
      { path: 'login', component: LoginComponent, pathMatch: 'full'  },
      { path: 'items/:id', component: ItemDetailsComponent, pathMatch: 'full', canActivate: [AuthService] },
      { path: 'welcome', component: WelcomeComponent, canActivate: [AuthService], pathMatch: 'full'  },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
    // ,  { useHash: true };
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
