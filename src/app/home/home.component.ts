import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() id: number
  @Input() nombre: string;

  constructor() { }
  ArrayCarrito = []
  ngOnInit() {

    
  }

  comprarProducto(item) {
    
    this.ArrayCarrito.push(item);
  }

  quitarProductohome(item) {
    this.ArrayCarrito.slice(item);
  }

  calcularTotal(){
    var total=0;
    

  }

  isCliente() {
    return sessionStorage.getItem('userType') === 'CLIENTE'
  }


}


