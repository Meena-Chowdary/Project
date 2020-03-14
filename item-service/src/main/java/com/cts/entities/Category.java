package com.cts.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long categoryId;
	private String name;
	private String description;
	private double gst;
//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
//	private List<SubCategory> subCategory;
//


	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

//	public List<SubCategory> getSubCategory() {
//		return subCategory;
//	}
//
//	public void setSubCategory(List<SubCategory> subCategory) {
//		this.subCategory = subCategory;
//	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getGst() {
		return gst;
	}

	public void setGst(double gst) {
		this.gst = gst;
	}

	public Category(Long categoryId) {
		this.categoryId = categoryId;
	}

	public Category() {
	}

	public Category(Long categoryId, String name, String description, double gst) {
		super();
		this.categoryId = categoryId;
		this.name = name;
		this.description = description;
		this.gst = gst;
	}

}
