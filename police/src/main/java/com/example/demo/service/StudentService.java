package com.example.demo.service;

import com.example.demo.entity.Student;
import com.example.demo.entity.User;
import com.example.demo.repository.StudentRepo;
import com.example.demo.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService{

    @Autowired
    private UserRepo userRepo;

    @Autowired
    public StudentRepo studentRepo;

    //Post:



    public Student post(Student student){
       Student saveStudent=studentRepo.save(student);

        User user = new User();
        user.setPassword(saveStudent.getPassword());
        user.setEmail(saveStudent.getEmail());
        user.setUsername(saveStudent.getUsername());
        user.setRole("student");
        userRepo.save(user);

        return saveStudent;
    }

    //Get All:
    public List<Student> getStudent(){
        return studentRepo.findAll();
    }

    //Get by id
    public Optional<Student> getById(Integer id){ return studentRepo.findById(id);}

//Delete
    public  void  deleteById(Integer id){studentRepo.deleteById(id);}

    public Student updateStudent(int id, Student student){
        Optional<Student> existingStudentOptional = studentRepo.findById(id);

        if (existingStudentOptional.isPresent()){
            Student existingStudent = existingStudentOptional.get();
            existingStudent.setEmail(student.getEmail());
            existingStudent.setStudentName(student.getStudentName());
            existingStudent.setStudentGender(student.getStudentGender());
            existingStudent.setStudentAge(student.getStudentAge());
            existingStudent.setStudentAddress(student.getStudentAddress());

            return studentRepo.save(existingStudent);
        }
        else {
            throw new RuntimeException("Student not found with id:"+id);
        }
        }


    }
