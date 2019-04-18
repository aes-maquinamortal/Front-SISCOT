import { Component, OnInit, Input } from '@angular/core';
import { CotizacionService } from '../servicios/cotizacion/cotizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})
export class CarroComprasComponent implements OnInit {

  @Input() id: number
  @Input() nombre: string;
  

  constructor(private cotizacionService: CotizacionService,private router: Router) {
    
  }

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

  finalizarPedido(){
    debugger
    let listaCarro=[]

    this.ArrayCarrito.forEach(element => {
      debugger
      listaCarro.push({productoid:element.id, cantidad: element.cantidad})

    });
    this.cotizacionService.crearCotizacion(listaCarro).subscribe(
      res=>{
        debugger
        alert("La Cotización se ha creado con Exito!");
        sessionStorage.setItem('carrito',JSON.stringify([]));
        this.router.navigateByUrl('/home');
      }
    )
  }

  calcularTotal(){
    var total=0;
  }

}
