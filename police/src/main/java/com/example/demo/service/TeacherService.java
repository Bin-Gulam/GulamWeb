package com.example.demo.service;

import com.example.demo.entity.Teacher;
import com.example.demo.repository.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {
    @Autowired
    private TeacherRepo teacherRepo;


    public Teacher post(Teacher teacher) {return teacherRepo.save(teacher);}


    public List<Teacher> getTeachers() { return teacherRepo.findAll();}

    public Optional<Teacher> getById(Integer id) {return teacherRepo.findById(id);}

    public void deleteById(Integer id) {teacherRepo.deleteById(id);}

    public Teacher updateTeacher(int id, Teacher teacher) {
        Optional<Teacher> existingTeacherOptional = teacherRepo.findById(id);

        if (existingTeacherOptional.isPresent()) {
            Teacher existingTeacher = existingTeacherOptional.get();
            existingTeacher.setEmail(teacher.getEmail());
            existingTeacher.setTeacherName(teacher.getTeacherName());
            existingTeacher.setTeacherPhone(teacher.getTeacherPhone());
            existingTeacher.setTeacherSpecialization(teacher.getTeacherSpecialization());

            return teacherRepo.save(existingTeacher);
        } else {
            throw new RuntimeException("Teacher not found with id:" + id);
        }
    }
}
