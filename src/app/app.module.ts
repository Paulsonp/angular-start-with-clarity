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

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemFilterPipe } from './item-list/item-list-filter-pipe';
import { StarComponent } from './shared/star.component';
import { ItemDetailsComponent } from './item-list/item-details/item-details.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemFilterPipe,
    StarComponent,
    ItemDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'items', component: ItemListComponent },
      { path: 'items/:id', component: ItemDetailsComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ],  { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
