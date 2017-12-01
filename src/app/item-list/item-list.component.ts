import { Component, OnInit } from '@angular/core';
import { ItemList } from './item-list';
import { ItemServices } from './item-list.service';

@Component({
  moduleId: module.id,
  selector: 'pm-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.css']
})
export class ItemListComponent implements OnInit {
    errorMessage: string;
    rating: string;
    pageTitle: string = 'Item List';
    imageWidth: number = 50;
    showImage: boolean = true;
    listItems: string ;
    items: ItemList[];
        constructor( private item_service: ItemServices) {

        }
        ngOnInit(): void {
            this.item_service.getItems()
                .subscribe(items => this.items = items,
                error => this.errorMessage = <any>error);
        }
        toggleImage() {
            this.showImage = !this.showImage;
        }
        onRatingClicked(message) {
            this.rating = 'Product Rating' + message;
        }
}
