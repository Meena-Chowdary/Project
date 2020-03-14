package com.cts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.entities.OrderT;
import com.cts.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository repo;
	
//	@Autowired
//	private CartRepository cRepo;
	
	public void addOrder(OrderT order) {
		repo.save(order);
//		cRepo.deleteAllByUserId(order.getTransaction().getUser().getUserId());
	}

	public List<OrderT> getAllOrders() {
		// TODO Auto-generated method stub
		return (List<OrderT>) repo.findAll();
	}
}
