package com.example.demo.controller;

import com.example.demo.entity.Subject;
import com.example.demo.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/subject")
@CrossOrigin(origins = "http://localhost:3000")
public class SubjectApi {

    @Autowired
    private SubjectService subjectService;

    @PostMapping
    public Subject post(@RequestBody Subject subject) {
        return subjectService.post(subject);
    }

    @GetMapping
    public List<Subject> getAllSubjects() {
        return subjectService.getSubjects();
    }

    @GetMapping("/{id}")
    public Optional<Subject> getById(@PathVariable Integer id) {
        return subjectService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id) {
        subjectService.deleteById(id);
    }

    @PutMapping("/{id}")
    public Subject updateSubject(@PathVariable int id, @RequestBody Subject subject) {
        return subjectService.updateSubject(id, subject);
    }


}
