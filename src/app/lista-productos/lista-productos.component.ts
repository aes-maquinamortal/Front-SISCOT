import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  constructor() { }

  lista=[]

  ngOnInit() {
    for (let index = 0; index < 17; index++) {
      const nombre = "nombre"+index;
      const descripcion = "descripcion"+index;
      this.lista.push({nombre: nombre, descripcion: descripcion })
    }
  }

}
