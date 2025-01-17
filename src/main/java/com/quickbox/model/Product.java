package com.quickbox.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "products")
public class Product {
    @Id
    private String id;
    private String adminId;  // Adjusted to match your form field
    private String image;    // Base64 image string// Adjusted to match your form field
    private int quantity;
    private String weight;
    private double price;
    private double discount;
    private Double totalPrice; // Using Double for nullability
    private String status;
    private String description;
    private String productName;
    private String category; // New field for category
}
