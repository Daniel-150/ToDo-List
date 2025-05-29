package com.example.todoList.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tasks")
@Data  // Lombok (getters, setters, toString, etc.)
@NoArgsConstructor  
@AllArgsConstructor
public class Task {
    @Id  
    @GeneratedValue(strategy = GenerationType.IDENTITY)  
    private Long id;

    @Column(nullable = false)  
    private String title;

    @Column(nullable = false)  
    private String description;

    @Column(nullable = false)  
    private boolean completed;
}