package com.example.demo.service;


import com.example.demo.entity.Admin;
import com.example.demo.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    public AdminRepo adminRepo;

    public Admin post(Admin admin){return adminRepo.save(admin);}

    public List<Admin> getAdmin() {return adminRepo.findAll();}

    public Optional<Admin> getById(Integer id){return adminRepo.findById(id);}

    public  void deleteById(Integer id){adminRepo.deleteById(id);}

    public Admin updateAdmin(int id, Admin admin){
        Optional<Admin> existingAdminOptional = adminRepo.findById(id);
        if(existingAdminOptional.isPresent()){
            Admin existingAdmin = existingAdminOptional.get();
            existingAdmin.setAdmin_name(admin.getAdmin_name());
            existingAdmin.setAdmin_email(admin.getAdmin_email());
            existingAdmin.setAdmin_Phone(admin.getAdmin_Phone());

            return adminRepo.save(existingAdmin);
        }
        else {
            throw new RuntimeException("Admin not found with id"+id);
        }
    }


}
