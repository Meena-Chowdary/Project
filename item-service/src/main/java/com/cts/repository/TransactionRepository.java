package com.cts.repository;

import org.springframework.data.repository.CrudRepository;

import com.cts.entities.Transaction;

public interface TransactionRepository extends CrudRepository<Transaction, Long> {

}
