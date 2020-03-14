package com.cts.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cts.entities.Seller;

@Repository
public interface SellerRepository extends CrudRepository<Seller, Long> {
}
