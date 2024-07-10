package com.example.demo.controller;


import com.example.demo.entity.Student;
import com.example.demo.entity.Teacher;
import com.example.demo.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/teacher")
@CrossOrigin(origins = "http://localhost:3000")

public class TeacherApi {

    @Autowired
    public TeacherService TeacherService;


    @PostMapping
    public Teacher post(@RequestBody Teacher Teacher)
    {
        return TeacherService.post(Teacher);
    }

    @GetMapping
    public List<Teacher> getTeacher() {return TeacherService.getTeachers();}

    @GetMapping("/{id}")
    public Optional<Teacher> getById(@PathVariable Integer id)
    {
        return TeacherService.getById(id);
    }

    @DeleteMapping("/{id}")
    public  void  deleteById(@PathVariable Integer id)
    {
        TeacherService.deleteById(id);
    }

    @PutMapping("/{id}")
    public Teacher updateTeacher(@PathVariable int id, @RequestBody Teacher teacher)
    {
        return TeacherService.updateTeacher(id, teacher);
    }


}
