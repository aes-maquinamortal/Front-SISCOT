import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  constructor() { }

  lista = []

  ngOnInit() {
    for (let index = 0; index < 17; index++) {
      const id = index;
      const nombre = "nombre" + index;
      const descripcion = "descripcion" + index;
      this.lista.push({ id: id, nombre: nombre, descripcion: descripcion })
    }
  }

  quitarProducto($event) {
    debugger
    const quitar = this.lista.findIndex(f => f.id == $event);
    timer(2000).subscribe(() => {
      this.lista.splice(quitar, 1);
    });
  }

}
