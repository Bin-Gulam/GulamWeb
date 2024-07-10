package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "teacher_name")
    private String teacherName;

    @Column(name = "teacher_phone")
    private String teacherPhone;

    @Column(name = "teacher_specialization")
    private String teacherSpecialization;
    private  String username;
    private  String password;

    // Constructor for creating new teachers
    public Teacher(String teacherName, String email, String teacherPhone, String teacherSpecialization) {
        this.teacherName = teacherName;
        this.email = email;
        this.teacherPhone = teacherPhone;
        this.teacherSpecialization = teacherSpecialization;
    }
}
