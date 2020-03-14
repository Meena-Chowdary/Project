package com.cts.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cts.entities.Cart;

@Repository
public interface CartRepository extends CrudRepository<Cart, Long>{
	
	List<Cart> findAllByUserId(Long userId);

	void deleteAllByUserId(Long userId);

	//Cart findAllById(Long userId);

}
