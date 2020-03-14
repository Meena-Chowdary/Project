import { Component, OnInit } from '@angular/core';
import { Seller } from '../models/Seller';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from '../services/seller.service';
@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent implements OnInit {

  user:Seller;
  msg:string;
  isNew:boolean;
  constructor(
    private userService:SellerService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }

  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.userService.getSellerDetailsById(id).subscribe(
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
      phone:'',
      address:{
          line1:'',
          line2:'',
          city:'',
          state:'',
          pincode:''
      },
      companyName:'',
      companyDescription:'',
      website:'',
      userId:0,
      userName:'',
      role:''
      };
    }
  }
  save(){
    let ob:Observable<Seller>;
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
