package com.cts.repository;

import org.springframework.data.repository.CrudRepository;

import com.cts.entities.OrderT;

public interface OrderRepository extends CrudRepository<OrderT, Long> {

}
