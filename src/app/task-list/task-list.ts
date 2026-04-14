import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent {
  @Input() tareas: Task[] = [];
  @Output() tareaEliminada = new EventEmitter<number>();

  constructor(private taskService: TaskService) {}

  eliminarTarea(index: number): void {
    this.taskService.eliminarTarea(index);
    this.tareaEliminada.emit(index);
  }

  marcarCompletar(index: number): void {
    this.taskService.marcarCompletar(index);
  }

  get totalTareas(): number {
    return this.tareas.length;
  }

  get tareasCompletadas(): number {
    return this.tareas.filter(t => t.completed).length;
  }
}

