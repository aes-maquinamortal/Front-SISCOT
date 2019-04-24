import { CotizacionService } from './../servicios/cotizacion/cotizacion.service';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-propuesta',
  templateUrl: './lista-propuesta.component.html',
  styleUrls: ['./lista-propuesta.component.css']
})
export class ListaPropuestaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private cotizacionService: CotizacionService) { }
  tipoUsuario = sessionStorage.getItem('userType');
  cotizacionId: number;
  listPropuestas = [];
  aceptado = undefined;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cotizacionId = +params['cotizacionId'];
    });
    if(this.tipoUsuario === 'CLIENTE') {
      this.cotizacionService.propuestasCotizacion(this.cotizacionId).subscribe(
        res => {
          this.listPropuestas = Object.assign([], res.data.propuestas);
          if(this.listPropuestas.length >0 ){
            this.aceptado = this.listPropuestas[0].estado == 'ACEPTADA' || this.listPropuestas[0].estado == 'RECHAZADA';
          }
        }
      );
    }
  }

  notificarPropuestas(){
    this.aceptado = true;
  }
}
