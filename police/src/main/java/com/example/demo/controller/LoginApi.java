package com.example.demo.controller;


import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/log")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginApi {
    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public ResponseEntity<User>authenticateUser(@RequestParam String username, @RequestParam String password){
        User user = userService.authentication(username, password);
        if (user != null){
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}
