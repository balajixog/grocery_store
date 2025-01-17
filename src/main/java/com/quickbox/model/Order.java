package com.quickbox.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "orders")
public class Order {
    @Id
    private String id;
    private String userId;
    private List<OrderItem> items;
    private double totalAmount;
    private String shippingAddress;
    private String contactNumber;
    private String paymentMethod;
    private String status;
    private String promoCode;
    private double discount;
    private double taxAmount;
    private double shippingCost;
    private String createdAt;
    private String updatedAt;

    @Data
    public static class OrderItem {
        private String productId;
        private String productName;
        private double price;
        private int quantity;
        private String image;
    }
}
