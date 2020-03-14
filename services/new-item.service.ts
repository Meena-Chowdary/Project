import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewItem } from '../models/newItem';

@Injectable({
  providedIn: 'root'
})
export class NewItemService {
  baseUrl:string;

  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:5000/item-service/item";
   }

   getAll() :Observable<NewItem[]>{
    return this.httpClient.get<NewItem[]>(this.baseUrl+"/all");
   }

   getItemDetailsById(id:number) :Observable<NewItem>{
    return this.httpClient.get<NewItem>(`${this.baseUrl}/${id}`);
   }

   addItem(user:NewItem) : Observable<NewItem>{
    return this.httpClient.post<NewItem>(this.baseUrl + "/add",user);

  }

  updateItem(user:NewItem) : Observable<NewItem>{
     return this.httpClient.put<NewItem>(this.baseUrl,user);
  }

  deleteItemById(id:number) :Observable<NewItem>{
    return this.httpClient.delete<NewItem>(`${this.baseUrl}/${id}`);
  }
}
