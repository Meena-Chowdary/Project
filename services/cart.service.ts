import { Cart } from '../models/cart';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemsPresentComponent } from '../items-present/items-present.component';

@Injectable()
export class CartService {
    baseUrl:string;

    constructor(private httpClient:HttpClient) {
        this.baseUrl="http://localhost:5000/item-service/item";
       }
    
    add(itemId:ItemsPresentComponent):Observable<Cart[]>{
        return this.httpClient.post<Cart[]>(this.httpClient+"/{userId}/cart/{itemId}",itemId);
    }
}