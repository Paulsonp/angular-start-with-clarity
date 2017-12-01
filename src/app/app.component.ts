import { Component } from '@angular/core';
import { ItemServices } from './item-list/item-list.service';

@Component({
  selector: 'pm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ItemServices ]
})
export class AppComponent {
  title = 'DEMO APP';
  constructor( private item_service: ItemServices) {

  }
}
