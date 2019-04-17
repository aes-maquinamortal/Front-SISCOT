import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})
export class CarroComprasComponent implements OnInit {

  @Input() id: number
  @Input() nombre: string;

  constructor() { }

  ArrayCarrito = []
  ngOnInit() {
   
    if(sessionStorage.getItem('carrito')){
      this.ArrayCarrito = JSON.parse(sessionStorage.getItem('carrito'));
    }

  }

  quitarProductohome(item) {
    let index= this.ArrayCarrito.findIndex(f=>
      f.id==item.id
    )
    this.ArrayCarrito.splice(index,1);
    sessionStorage.setItem('carrito',JSON.stringify(this.ArrayCarrito));
  }

  calcularTotal(){
    var total=0;
  }

}
