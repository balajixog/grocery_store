package com.quickbox.service;

import com.quickbox.model.Wallet;
import com.quickbox.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WalletService {

    @Autowired
    private WalletRepository walletRepository;

    public Wallet getWalletByUserId(String userId) {
        return walletRepository.findById(userId).orElse(new Wallet());
    }

    public Wallet updateWallet(Wallet wallet) {
        return walletRepository.save(wallet);
    }

    public void addFunds(String userId, double amount) {
        Wallet wallet = getWalletByUserId(userId);
        wallet.setBalance(wallet.getBalance() + amount);
        updateWallet(wallet);
    }
}
