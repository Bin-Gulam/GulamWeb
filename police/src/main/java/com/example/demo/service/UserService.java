package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public User authentication(String username, String password){
        Optional<User>login= userRepo.findByUsername(username);
        if(login.isPresent()){
            User user= login.get();
            if (password.matches(user.getPassword())){
                return user;
            }
        }

        return null;
    }
}
