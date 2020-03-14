import { Injectable } from '@angular/core';
import { Items } from '../models/item';
@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    items: Items[];
    constructor() {
        this.items = [
        ];
    }

    getAll(): Items[] {
        return this.items;
    }

    get(Id: number) {
        return this.items.find((c) => (c.itemId == Id));
    }

    add(item: Items) {
        this.items.push(item);
    }
    update(itemId: Items) {
        let index = this.items.findIndex((c) => (c.itemId === itemId.itemId));
        if (index > -1) {
            this.items[index] = itemId;
        }
    }

    delete(Id: number) {
        let index = this.items.findIndex((item) => (item.itemId == Id));
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}