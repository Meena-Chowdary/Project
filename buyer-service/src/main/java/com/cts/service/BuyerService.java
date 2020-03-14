package com.cts.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.entities.Buyer;
import com.cts.repository.BuyerRepository;

@Service
public class BuyerService {
	
	@Autowired
	BuyerRepository repo;

	
	public void addBuyer(Buyer buyer) {
		repo.save(buyer);
		
	}

	public void deleteUser(Long id) {
		repo.deleteById(id);
		
	}

	public void updateBuyer(Buyer buyer) {
		repo.save(buyer);
		
	}

	public Optional<Buyer> getBuyerById(Long buyerId) {
		return repo.findById(buyerId);
	}

}
