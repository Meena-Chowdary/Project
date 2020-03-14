package com.cts.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.entities.Cart;
import com.cts.entities.OrderT;
import com.cts.entities.Transaction;
import com.cts.entities.User;
import com.cts.repository.CartRepository;
import com.cts.repository.TransactionRepository;
import com.cts.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderService service;
	
	@Autowired
	private TransactionRepository tRepo;
	
	@Autowired
	private CartRepository cRepo;
	
//	@Autowired
//	private CartService cService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/{userId}")
	void addOrder(@RequestBody OrderT order, @PathVariable Long userId) {
		order=new OrderT(new ArrayList<Cart>());
		//System.out.println("User Id:"+userId);
		order.getCart().addAll((List<Cart>) cRepo.findAllByUserId(userId));
		
		order.setAmount(1200);
		order.setTransaction(new Transaction("DEBIT",new Date().toString(),new User(userId)));
//		order.setDateTime(new Date().toString());
//		order.setType("DEBIT");
//		order.setUser(new User(userId));
		tRepo.save(order.getTransaction());
		service.addOrder(order);
	}

	@RequestMapping("/all")
	List<OrderT> allOrders(){
		return service.getAllOrders();
	}
}
