import { Component, OnInit } from '@angular/core';
import { CotizacionService } from '../servicios/cotizacion/cotizacion.service';

@Component({
  selector: 'app-lista-cotizaciones',
  templateUrl: './lista-cotizaciones.component.html',
  styleUrls: ['./lista-cotizaciones.component.css']
})
export class ListaCotizacionesComponent implements OnInit {

  cotizaciones: [];

  constructor(
    private cotizacionService: CotizacionService
  ) { }

  ngOnInit() {
    this.cotizacionService.getCotizaciones()
      .subscribe( (res: any) => {
        this.cotizaciones = res.data.cotizaciones;
      })
  }

  isCliente() {
    return sessionStorage.getItem('userType') === 'CLIENTE'
  }

}
