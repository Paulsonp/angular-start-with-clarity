import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemList } from '../item-list';

@Component({
  moduleId: module.id,
  templateUrl: 'item-details.component.html',
  styleUrls: ['item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
    pageTitle: string = 'Item Details';
    items: ItemList;
    constructor(private ac_route: ActivatedRoute, private _router: Router) {
        console.log(this.ac_route.snapshot.params['id']);
    }
    onBack(): void {
        this._router.navigate(['/items']);
    }
    ngOnInit(): void {
        const value_id = this.ac_route.snapshot.params['id'];
        this.pageTitle += `: ${value_id}`;
    }
}
