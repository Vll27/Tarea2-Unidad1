import { Component} from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent {

  // los datos se van guardando en un arreglo, el cual se usa para
  // desplegar la tabla
  productos:any[] = [];

  // los input del formulario se asocian con un modelo
  producto:any = {};

guardar(){
  // se inserta el dato en el arreglo
  this.productos.push(this.producto);

  // se crea un nuevo objeto para almacenar nuevos datos
  this.producto = {};
 }
  // para ir probando agregue un boton de eliminar
 eliminar(i: number): void{
  var answer = confirm ('Esta seguro de eliminarlo?');
  if(answer){
    this.productos.splice(i,1);
  }
 }
}


