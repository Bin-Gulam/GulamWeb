package com.example.demo.controller;

import com.example.demo.entity.Student;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/student")
@CrossOrigin(origins = "http://localhost:3000")

public class StudentApi {
    @Autowired
    public StudentService StudentService;

@PostMapping
    public Student post(@RequestBody Student Student){
        return StudentService.post(Student);
    }

    @GetMapping
    public List<Student> getStudent(){
    return StudentService.getStudent();
    }

    @GetMapping("/{id}")
    public Optional<Student> getById(@PathVariable Integer id)
    {
        return StudentService.getById(id);
    }

    @DeleteMapping("/{id}")
    public  void  deleteById(@PathVariable Integer id)
    {
        StudentService.deleteById(id);
    }

  @PutMapping("/{id}")
   public Student updateStudent(@PathVariable int id, @RequestBody Student student)
  {
      return StudentService.updateStudent(id, student);
   }


}
