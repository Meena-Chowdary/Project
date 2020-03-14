package com.cts.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cts.entities.Buyer;

@Repository
public interface BuyerRepository extends CrudRepository<Buyer, Long> {

}
