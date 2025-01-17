package com.quickbox.service;

import com.quickbox.model.User;
import com.quickbox.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }

    public boolean checkPassword(User user, String rawPassword) {
        // In a real-world application, you should verify the encrypted password
        return user.getPassword().equals(rawPassword);
    }

    public List<User> findAllUsers(){
        return userRepository.findAll();
    }
}
