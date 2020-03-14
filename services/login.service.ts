import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string;
  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:3031/user";
   }
   getAll() :Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  getUserDetailsById(userId:number) :Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${userId}`);
  }

  getUserByUserName(userName:string) :Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl+"/username"}/${userName}`)
  }
}