import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewItemService } from '../services/new-item.service';
import { NewItem } from '../models/newItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  item:NewItem;
  msg:string;
  isNew:boolean;
  constructor(
    private userService:NewItemService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }
    
  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.userService.getItemDetailsById(id).subscribe(
        (data) =>{
          this.item=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.item={
        "newItemId":0,
        "itemName":'',
        "description":'',
        "stock":0,
        "sellingPrice":0,
        "seller":{
          "firstName":'',
          
      "lastName":'',
      "password":'',
      "emailId":'',
      "phone":'',
      "address":{
          "line1":'',
          "line2":'',
          "city":'',
          "state":'',
          "pincode":''
      },
      "companyName":'',
      "companyDescription":'',
      "website":'',
      "userId":0,
      "userName":'',
      "role":''
        },
        "subCategory":{
          "subCategoryId":0,
          "subCategoryName":'',
          "description":''
        },
        "discount":{
          "discountId":0,
          "percent":0,
          "startDate": new Date,
          "endDate":new Date
        }
      };
    }
  }
  save(){
    let ob:Observable<NewItem>;
    if(this.isNew){
      ob=this.userService.addItem(this.item);
    }else{
      ob=this.userService.updateItem(this.item);
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
