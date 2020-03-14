import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../models/Buyer';


@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  baseUrl:string;

  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:5000/buyer-service/buyer";
   }

   getAll() :Observable<Buyer[]>{
     return this.httpClient.get<Buyer[]>(this.baseUrl);
   }

   getBuyerDetailsById(id:number) :Observable<Buyer>{
     return this.httpClient.get<Buyer>(`${this.baseUrl+ "/Buyer"}/${id}`);
   }

   getUserByUserName(userName:string) :Observable<Buyer>{
    return this.httpClient.get<Buyer>(`${this.baseUrl+ "/Buyers/username"}/${userName}`);
  }

   addUser(user:Buyer) : Observable<Buyer>{
     return this.httpClient.post<Buyer>(this.baseUrl + "/signup",user);

   }

   updateUser(user:Buyer) : Observable<Buyer>{
      return this.httpClient.put<Buyer>(this.baseUrl,user);
   }

   delete(id:number) :Observable<Buyer>{
     return this.httpClient.delete<Buyer>(`${this.baseUrl + "/Buyer"}/${id}`);
   }
}
