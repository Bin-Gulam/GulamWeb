package com.example.demo.controller;

import com.example.demo.entity.Admin;
import com.example.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/admin")
public class AdminApi {
    @Autowired
    public AdminService AdminService;

    @PostMapping
    public Admin post(@RequestBody Admin admin)
    {
        return AdminService.post(admin);
    }

    @GetMapping
    public List<Admin> getAdmin(){
        return AdminService.getAdmin();
    }

    @GetMapping("/{id}")
    public Optional<Admin> getById(@PathVariable Integer id)
    {
        return AdminService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id)
    {
        AdminService.deleteById(id);
    }

    @PutMapping("/{id}")
    public Admin updateAdmin(@PathVariable int id, @RequestBody Admin admin)
    {
        return AdminService.updateAdmin(id, admin);
    }

}
