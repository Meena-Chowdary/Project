import { Component, OnInit } from '@angular/core';
import { Items } from '../models/item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../services/item.service';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

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
