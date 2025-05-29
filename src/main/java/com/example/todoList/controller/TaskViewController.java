package com.example.todoList.controller;

import com.example.todoList.model.Task; // Mayúscula consistente
import com.example.todoList.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/tasks") // Mapeo base para todas las rutas
public class TaskViewController {

    @Autowired
    private TaskService taskService;

    // Vista principal que muestra lista + formulario
    @GetMapping
    public String viewTasks(Model model) {
        model.addAttribute("tasks", taskService.getAllTasks()); // Plural consistente
        model.addAttribute("newTask", new Task()); // Mayúscula
        return "tasks"; // Nombre de plantilla consistente (debe ser tasks.html)
    }

    // Procesar creación
    @PostMapping("/create")
    public String createTask(@ModelAttribute Task newTask) { // Mayúscula
        taskService.createTask(newTask);
        return "redirect:/tasks";
    }

    // Procesar eliminación
    @GetMapping("/delete/{id}")
    public String deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return "redirect:/tasks";
    }
}