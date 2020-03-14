package com.cts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.entities.Cart;
import com.cts.repository.CartRepository;

@Service
public class CartService {

	@Autowired
	private CartRepository repo;
	
	public Optional<Cart> getCartById(Long cartId) {
		// TODO Auto-generated method stub
		return repo.findById(cartId);
	}
	
	public List<Cart> getAll() {
		return (List<Cart>) repo.findAll();
	}
	
	public void addToCart(Cart cart) {
		repo.save(cart);
	}
	
	public void deleteCartById(Long userId) {
		repo.deleteById(userId);
	}
	
	public void deleteAll() {
		repo.deleteAll();
	}
	
}
