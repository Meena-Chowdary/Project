package com.cts.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.entities.Discount;
import com.cts.service.DiscountService;

@RestController
@RequestMapping("/discount")
public class DiscountController {

	@Autowired
	private DiscountService service;;
	
	@RequestMapping("/all")
	List<Discount> getAll() {
		return service.getAllDiscounts();
	}

	@RequestMapping("/{discountId}")
	Optional<Discount> getById(@PathVariable Long discountId) {
		return service.getDiscountById(discountId);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/add")
	void addDiscount(@RequestBody Discount discount) {
		service.addDiscount(discount);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/{discountId}")
	void deleteDiscountById(@PathVariable Long discountId) {
		service.deleteDiscount(discountId);
	}

	@RequestMapping(method = RequestMethod.PUT)
	void updateDiscount(@RequestBody Discount discount) {
		service.updateDiscount(discount);
	}
}
