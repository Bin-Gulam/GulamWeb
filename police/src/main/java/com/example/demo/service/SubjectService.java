package com.example.demo.service;

import com.example.demo.entity.Subject;
import com.example.demo.repository.SubjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubjectService {

    @Autowired
    private SubjectRepo subjectRepo;

    public Subject post(Subject subject) {
        return subjectRepo.save(subject);
    }

    public List<Subject> getSubjects() {
        return subjectRepo.findAll();
    }

    public Optional<Subject> getById(Integer id) {
        return subjectRepo.findById(id);
    }

    public void deleteById(Integer id) {
        subjectRepo.deleteById(id);
    }

    public Subject updateSubject(int id, Subject subject) {
        Optional<Subject> existingSubjectOptional = subjectRepo.findById(id);

        if (existingSubjectOptional.isPresent()) {
            Subject existingSubject = existingSubjectOptional.get();
            existingSubject.setSubject_name(subject.getSubject_name());
            existingSubject.setSubject_teacher(subject.getSubject_teacher());

            return subjectRepo.save(existingSubject);
        } else {
            throw new RuntimeException("Subject not found with id: " + id);
        }
    }
}
