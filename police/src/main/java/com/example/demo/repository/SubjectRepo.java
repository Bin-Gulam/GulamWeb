package com.example.demo.repository;

import com.example.demo.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepo  extends JpaRepository<Subject, Integer> {
}
