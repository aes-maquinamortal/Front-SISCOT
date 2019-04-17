import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CotizacionService } from '../servicios/cotizacion/cotizacion.service';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {

  cotizacionId: number = null;
  productos = [];
  total = 0;
  totalDescuento = 0;
  descuento = 0;
  propuestaId = null;
  estado = 'PENDIENTE';

  constructor(
    private route: ActivatedRoute,
    private cotizacionService: CotizacionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.cotizacionId = +params['cotizacionId'];
      this.cotizacionService.getCotizacionPropuesta(this.cotizacionId)
        .subscribe( (res: any) => {
          let productos = res.data.cotizacion.productos;
          if(res.data.propuesta) {
            productos = res.data.propuesta.productos;
            this.propuestaId = res.data.propuesta.id
            this.totalDescuento = res.data.propuesta.total;
            this.descuento = res.data.propuesta.descuento;
          }

          productos.forEach(producto => {
            if(!producto.valor_unitario)
              producto.valor_unitario = 0;
            this.total += (producto.valor_unitario * producto.cantidad)
          })

          this.productos = productos;
        })
    });
  }

  sendPropuesta() {
    const propuesta = {
      cotizacionid: this.cotizacionId,
      total: this.totalDescuento,
      descuento: this.descuento
    }

    let productos = []
    this.productos.forEach( producto => {
      productos.push({
        productoid: producto.id,
        cantidad: producto.cantidad,
        valor_unitario: producto.valor_unitario
      });
    })

    this.cotizacionService.createPropuesta(propuesta, productos)
      .subscribe(res => {
        alert('Propuesta creada exitosamente');
        this.router.navigateByUrl('/cotizaciones');
      })
  }

  updateTotal() {
    let total = 0;
    this.productos.forEach(producto => {
      total += (producto.valor_unitario * producto.cantidad)
    });
    this.totalDescuento = Math.trunc((1 - (this.descuento/100))*total)
    this.total = total;
  }
}
