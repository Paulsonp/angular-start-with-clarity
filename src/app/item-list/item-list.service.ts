import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ItemList } from './item-list';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ItemServices {
    handleError: any;
    private items_url= 'api/items/item.json';
    constructor( private http: Http ) {

    }
    getItems(): Observable<ItemList[]> {
        return this.http.get(this.items_url)
            .map((res: Response) => res.json())
            // return this.http.get('../assets/data/potential.json')
            // .map((res: Response) => res.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(this.handleError);
    }
    private hadleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
    }
}
