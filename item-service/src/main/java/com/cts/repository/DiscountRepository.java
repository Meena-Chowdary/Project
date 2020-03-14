package com.cts.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cts.entities.Discount;
@Repository
public interface DiscountRepository extends CrudRepository<Discount, Long> {

}
