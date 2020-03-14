import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  msg:string;
  isNew:boolean;
  constructor(private userService:UserService,
    private actRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    let userId=this.actRoute.snapshot.params.id;
    if(userId){
      this.isNew=false;
      this.userService.getUserDetailsById(userId).subscribe(
        (data) =>{
          this.user=data;
        }
      );

  }else{
    this.isNew=true;
    this.user={
    userId:0,  
    userName:'',
    password:'',
    role:''
    };
  }
}
signIn(){
  if(localStorage){
      var name = (<HTMLInputElement>document.getElementById("userName")).value;
        localStorage.setItem("userId",name);
        var id=localStorage.getItem("userId");
        this.router.navigateByUrl("");
  }
}
}
