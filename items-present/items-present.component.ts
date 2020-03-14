import { Component, OnInit } from '@angular/core';
import { NewItem } from '../models/newItem';
import { NewItemService } from '../services/new-item.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-items-present',
  templateUrl: './items-present.component.html',
  styleUrls: ['./items-present.component.css']
})
export class ItemsPresentComponent implements OnInit {
  items: NewItem[];
  cart:Cart;
  msg: String;
  constructor(private itemServ: NewItemService,
    private itemService:CartService,
    private router: Router) { }

  ngOnInit() {
    this.itemServ.getAll()
    .subscribe(
        data=>this.items=data
    );
}

  save(id: any){
      this.itemService.add(id);
    
    this.router.navigateByUrl("/cart");
  }

}
