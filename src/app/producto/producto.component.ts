import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() id: number
  @Input() nombre: string;
  @Input() descripcion: string;
  @Input() imagen: string;
  @Output() idQuitar: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  disabled = false;
  ngOnInit() {
  }

  agregarAlCarrito() {
    debugger
    let carrito = [];
    if (sessionStorage.getItem("carrito")) {
      carrito = JSON.parse(sessionStorage.getItem("carrito"));
    }
    carrito.push(this.id);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    this.disabled = true;
    this.idQuitar.emit(this.id)
  }

}
