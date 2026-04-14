import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tareas: Task[] = [
    { id: 1, title: 'Tarea 1', completed: false },
    { id: 2, title: 'Tarea 2', completed: false },
    { id: 3, title: 'Tarea 3', completed: false }
  ];
  private nextId = 4;

  getTareas(): Task[] {
    return this.tareas;
  }

  agregarTarea(tarea: string): boolean {
    if (!tarea || tarea.trim() === '') {
      return false;
    }
    this.tareas.push({
      id: this.nextId++,
      title: tarea.trim(),
      completed: false
    });
    return true;
  }

  eliminarTarea(index: number): void {
    if (index >= 0 && index < this.tareas.length) {
      this.tareas.splice(index, 1);
    }
  }

  marcarCompletar(index: number): void {
    if (index >= 0 && index < this.tareas.length) {
      this.tareas[index].completed = !this.tareas[index].completed;
    }
  }
}
