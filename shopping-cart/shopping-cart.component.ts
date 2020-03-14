import { Component, OnInit } from '@angular/core';
import { Items } from '../models/item';
import { ItemsService } from '../services/item.service';
import { Cart } from '../models/cart';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

//   private items: Cart[] = [];
// 	private total: number = 0;

	constructor(
		// private activatedRoute: ActivatedRoute,
		// private productService: CartService
	) { }

	ngOnInit() {
	// 	this.activatedRoute.params.subscribe(params => {
	// 		var id = params['newItemId'];
	// 		if (id) {
	// 			var item: Cart = {
	// 				product: this.productService.find(id),
	// 				quantity: 1
	// 			};
	// 			if (localStorage.getItem('shopping-cart') == null) {
	// 				let cart: any = [];
	// 				cart.push(JSON.stringify(item));
	// 				localStorage.setItem('shopping-cart', JSON.stringify(cart));
	// 			} else {
	// 				let cart: any = JSON.parse(localStorage.getItem('shopping-cart'));
	// 				let index: number = -1;
	// 				for (var i = 0; i < cart.length; i++) {
	// 					let item: Cart = JSON.parse(cart[i]);
	// 					if (item.product.newItemId == id) {
	// 						index = i;
	// 						break;
	// 					}
	// 				}
	// 				if (index == -1) {
	// 					cart.push(JSON.stringify(item));
	// 					localStorage.setItem('shopping-cart', JSON.stringify(cart));
	// 				} else {
	// 					let item: Cart = JSON.parse(cart[index]);
	// 					item.quantity += 1;
	// 					cart[index] = JSON.stringify(item);
	// 					localStorage.setItem("shopping-cart", JSON.stringify(cart));
	// 				}
	// 			}
	// 			this.loadCart();
	// 		} else {
	// 			this.loadCart();
	// 		}
	// 	});
	// }

	// loadCart(): void {
	// 	this.total = 0;
	// 	this.items = [];
	// 	let cart = JSON.parse(localStorage.getItem('cart'));
	// 	for (var i = 0; i < cart.length; i++) {
	// 		let item = JSON.parse(cart[i]);
	// 		this.items.push({
	// 			product: item.product,
	// 			quantity: item.quantity
	// 		});
	// 		this.total += item.product.price * item.quantity;
	// 	}
	// }

	// remove(id: number): void {
	// 	let cart: any = JSON.parse(localStorage.getItem('cart'));
	// 	let index: number = -1;
	// 	for (var i = 0; i < cart.length; i++) {
	// 		let item: Cart = JSON.parse(cart[i]);
	// 		if (item.product.newItemId == id) {
	// 			cart.splice(i, 1);
	// 			break;
	// 		}
	// 	}
	// 	localStorage.setItem("cart", JSON.stringify(cart));
	// 	this.loadCart();
	// }

}
}

