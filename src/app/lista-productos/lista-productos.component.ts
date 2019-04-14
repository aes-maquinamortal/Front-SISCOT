import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  constructor() { }

  lista = []
  
  @Output() itemAdicionarLista: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    for (let index = 0; index < 17; index++) {
      const id = index;
      const nombre = "nombre" + index;
      const descripcion = "descripcion" + index;
      this.lista.push({ id: id, nombre: nombre, descripcion: descripcion })
    }
  }

  quitarProducto($event) {
    
    const quitar = this.lista.findIndex(f => f.id == $event);
    timer(2000).subscribe(() => {
      // borrar la posicion
      this.lista.splice(quitar, 1);
    });
  }

  adicionarproducto($event){
  
    const add = this.lista.findIndex(f => f.id == $event);
    timer(2000).subscribe(() => {
    
    this.itemAdicionarLista.emit(this.lista[add]);
    this.lista.splice(add, 1);
  });

}

}
