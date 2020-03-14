package com.cts.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.entities.Seller;
import com.cts.service.SellerService;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(value = "/seller")
public class SellerController {

	@Autowired
	private SellerService service;

	@RequestMapping(method = RequestMethod.POST, value = "/signup")
	void addBuyer(@RequestBody Seller seller) {
		seller.setRole("SELLER");
		seller.setUserName(seller.getEmail());
		service.addSeller(seller);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/{userId}")
	void deleteUserById(@PathVariable Long userId) {
		service.deleteUser(userId);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	void updateSeller(@RequestBody Seller seller) {
		service.updateSeller(seller);
	}
	
	@RequestMapping("/{userId}")
	Optional<Seller> getSellerById(@PathVariable Long sellerId) {
		return service.getSellerById(sellerId);
	}

}
