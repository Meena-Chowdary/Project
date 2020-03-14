package com.cts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.entities.Discount;
import com.cts.repository.DiscountRepository;

@Service
public class DiscountService {
	
	@Autowired
	private DiscountRepository repo;

	public List<Discount> getAllDiscounts() {
		// TODO Auto-generated method stub
		return (List<Discount>) repo.findAll();
	}

	public Optional<Discount> getDiscountById(Long discountId) {
		// TODO Auto-generated method stub
		return repo.findById(discountId);
	}

	public void addDiscount(Discount discount) {
		// TODO Auto-generated method stub
		repo.save(discount);
		
	}

	public void deleteDiscount(Long discountId) {
		// TODO Auto-generated method stub
		repo.deleteById(discountId);
		
	}

	public void updateDiscount(Discount discount) {
		// TODO Auto-generated method stub
		repo.save(discount);
		
	}
	
	

}
