package com.cts.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long cartId;
//	private double amount;

	private Long userId;
	@OneToMany
	private List<Item> items;

//	public Long getCartId() {
//		return cartId;
//	}
//
//	public void setCartId(Long cartId) {
//		this.cartId = cartId;
//	}
//
//	public double getAmount() {
//		return amount;
//	}
//
//	public void setAmount(double amount) {
//		this.amount = amount;
//	}




	public Long getUserId() {
		return userId;
	}

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Cart(Long userId, List<Item> items) {
		this.userId = userId;
		this.items = items;
	}

	public Cart(Long userId) {
		super();
		this.userId = userId;
	}

	public Cart(List<Item> items) {
		super();
		this.items = items;
	}

	public Cart() {
		super();
	}



}
