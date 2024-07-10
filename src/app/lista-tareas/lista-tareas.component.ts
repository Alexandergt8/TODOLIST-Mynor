import { Component } from '@angular/core';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { EliminarTareaComponent } from '../eliminar-tarea/eliminar-tarea.component';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [AgregarTareaComponent, EliminarTareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  //Array
  tareas: string[] = [];

  //contador
  contador: number = 1;

  //Propiedad para cambiar el estado de la tarea
  tareaCompletada: boolean[] = Array(this.tareas.length).fill(false);

  //Método para cambiar estado
  cambiarEstado(index: number){
    this.tareaCompletada[index] = !this.tareaCompletada[index];
/* console.log(this.tareaCompletada);*/
  }
}
