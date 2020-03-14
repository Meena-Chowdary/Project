package com.cts.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.entities.Cart;
import com.cts.entities.Item;
import com.cts.service.CartService;
import com.cts.service.ItemService;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/item")
public class ItemController {

	@Autowired
	private ItemService service;
	
	@Autowired
	private CartService cService;

	@RequestMapping("/all")
	List<Item> getAll() {
		return service.getItems();
	}

	@RequestMapping("/{itemId}")
	Item getById(@PathVariable Long itemId) {
		return service.getItemById(itemId);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/{userId}/cart/{itemId}" )
	void addItemToCart(@RequestBody Cart cart, @PathVariable Long userId, @PathVariable Long itemId) {

		cart=new Cart(userId, new ArrayList<Item>());
		cart.getItems().add(service.getItemById(itemId));
		cService.addToCart(cart);
		
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/add")
	void addItem(@RequestBody Item item) {
		double sPrice = ((1-(item.getDiscount().getPercent()/100) * item.getMarkedPrice()));
		item.setSellingPrice(sPrice);
		service.addItem(item);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/{itemId}")
	void deleteCategoryById(@PathVariable Long itemId) {
		service.deleteItem(itemId);
	}

	@RequestMapping(method = RequestMethod.PUT)
	void updateItem(@RequestBody Item item) {
		service.updateItem(item);
	}
	
	@RequestMapping("/{itemName")
	List<Item> getItemsByName(@PathVariable String itemName){
		return service.getItemsByName(itemName);
	}
}
