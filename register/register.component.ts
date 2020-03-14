import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Buyer } from '../models/Buyer';
import { BuyerService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:Buyer;
  msg:string;
  isNew:boolean;
  constructor(
    private userService:BuyerService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }

  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.userService.getBuyerDetailsById(id).subscribe(
        (data) =>{
          this.user=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.user={
      firstName:'',
      lastName:'',
      password:'',
      emailId:'',
      mobileNumber:'',
      address:{
          line1:'',
          line2:'',
          city:'',
          state:'',
          pincode:''
      },
      userId:0,
      userName:'',
      role:''
      };
    }
  }
  save(){
    let ob:Observable<Buyer>;
    if(this.isNew){
      ob=this.userService.addUser(this.user);
    }else{
      ob=this.userService.updateUser(this.user);
    }
    ob.subscribe(
      (Data) =>{
        this.router.navigateByUrl("");
      },
      (errResponse)=> {
        this.msg=errResponse.error;
        
      }
    );
  }

}
