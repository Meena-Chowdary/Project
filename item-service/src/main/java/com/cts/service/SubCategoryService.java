package com.cts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.entities.SubCategory;
import com.cts.repository.SubCategoryRepository;

@Service
public class SubCategoryService {

	@Autowired
	private SubCategoryRepository repo;

	public void addSubCategory(SubCategory subCategory) {
		repo.save(subCategory);
	}

	public void deleteSubCategory(Long subCategoryId) {
		repo.deleteById(subCategoryId);

	}

	public List<SubCategory> getAllSubCategories() {
		return (List<SubCategory>) repo.findAll();
	}

	public Optional<SubCategory> getSubCategoryById(Long subCategoryId) {
		return repo.findById(subCategoryId);

	}

	public void updateSubCategory(SubCategory subCategory) {
		repo.save(subCategory);
		
	}

}
