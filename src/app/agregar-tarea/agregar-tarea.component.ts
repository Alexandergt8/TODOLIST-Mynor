import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent {
  @Input() agregarTareasRecibidas: string[] = [];

  //Método para agregar tareas
  nuevaTarea = "";
  agregarTarea(){
    if(this.nuevaTarea.trim() !== ""){
      this.agregarTareasRecibidas.push(this.nuevaTarea);
      this.nuevaTarea = "";
    }
  }

}
