import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  tareas: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tareas = this.taskService.getTareas();
  }

  agregarTarea(tarea: string) {
    if (this.taskService.agregarTarea(tarea)) {
      this.tareas = this.taskService.getTareas();
    }
  }
}

