package com.cts.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.entities.Cart;
import com.cts.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartService service;
	
	@RequestMapping("/{cartId}")
	Optional<Cart> getCartById(@PathVariable Long cartId) {
		return service.getCartById(cartId);
	}

	@RequestMapping("/all")
	List<Cart> getAll(){
		return service.getAll();
	}
	
}
