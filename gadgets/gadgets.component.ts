import { Component, OnInit } from '@angular/core';
import { Items } from '../models/item';
import { ItemsService } from '../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent implements OnInit {

  private item:Items;

  constructor(private itemServ:ItemsService,
    private routeData:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.routeData.params.subscribe(
      (params)=>{
        let itemId=params['iId']; 
          this.item=new Items();
        }
    );
  }


  save(){
    
      this.itemServ.add(this.item);
    
    this.router.navigateByUrl("/cart");
  }

}
