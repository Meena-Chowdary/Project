package com.cts.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.entities.Seller;
import com.cts.repository.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	SellerRepository repo;

	public void addSeller(Seller seller) {
		repo.save(seller);
		
	}

	public void deleteUser(Long id) {
		repo.deleteById(id);
		
	}

	public void updateSeller(Seller seller) {
		repo.save(seller);
		
	}

	public Optional<Seller> getSellerById(Long sellerId) {
		// TODO Auto-generated method stub
		return repo.findById(sellerId);
	}

}
