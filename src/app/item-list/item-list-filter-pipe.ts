import { Pipe, PipeTransform } from '@angular/core';
import { ItemList } from './item-list';

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

 transform(value: ItemList[], filterBy: string): ItemList[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((item: ItemList) =>
    item.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
