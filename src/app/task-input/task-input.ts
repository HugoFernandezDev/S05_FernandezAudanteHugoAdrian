import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-input',
  standalone: false,
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInputComponent {
  @Output() tareaAgregada = new EventEmitter<string>();
  
  nuevaTarea: string = '';
  errorMessage: string = '';

  agregarTarea(): void {
    if (!this.nuevaTarea.trim()) {
      this.errorMessage = 'La tarea no puede estar vacía';
      return;
    }
    
    this.tareaAgregada.emit(this.nuevaTarea);
    this.nuevaTarea = '';
    this.errorMessage = '';
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.agregarTarea();
    }
  }
}

