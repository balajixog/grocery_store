package com.quickbox.controller;

import com.quickbox.model.Wallet;
import com.quickbox.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/wallet")
@CrossOrigin
public class WalletController {

    @Autowired
    private WalletService walletService;

    @GetMapping("/{userId}")
    public ResponseEntity<Wallet> getWallet(@PathVariable String userId) {
        Wallet wallet = walletService.getWalletByUserId(userId);
        return ResponseEntity.ok(wallet);
    }

    @PostMapping("/{userId}/addFunds")
    public ResponseEntity<?> addFunds(@PathVariable String userId, @RequestParam double amount) {
        walletService.addFunds(userId, amount);
        return ResponseEntity.ok("Funds added successfully.");
    }
}
