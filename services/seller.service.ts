import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../models/Seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseUrl:string;

  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:5000/seller-service/seller";
   }

   getAll() :Observable<Seller[]>{
     return this.httpClient.get<Seller[]>(this.baseUrl);
   }

   getSellerDetailsById(id:number) :Observable<Seller>{
     return this.httpClient.get<Seller>(`${this.baseUrl+ "/Seller"}/${id}`);
   }

   getUserByUserName(userName:string) :Observable<Seller>{
    return this.httpClient.get<Seller>(`${this.baseUrl+ "/Sellers/username"}/${userName}`);
  }

   addUser(user:Seller) : Observable<Seller>{
     return this.httpClient.post<Seller>(this.baseUrl + "/signup",user);

   }

   updateUser(user:Seller) : Observable<Seller>{
      return this.httpClient.put<Seller>(this.baseUrl,user);
   }

   delete(id:number) :Observable<Seller>{
     return this.httpClient.delete<Seller>(`${this.baseUrl + "/Seller"}/${id}`);
   }
}
