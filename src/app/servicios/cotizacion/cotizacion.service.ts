import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import Util from '../../utils';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private apollo: Apollo) { }

  public getCotizaciones() {
    const query = gql`
      query {
        cotizaciones {
          id, fecha
        }
      }
    `
    return this.apollo.query({ query });
  }

  public getCotizacionPropuesta(cotizacionId: number) {
    const query = gql`
      query {
        cotizacion(cotizacionid: ${cotizacionId}) {
          productos {
            id, nombre, cantidad, referencia
          }
        }
        propuesta(cotizacionid: ${cotizacionId}) {
          id, fecha, total, descuento, estado, productos {
            nombre, cantidad, referencia, valor_unitario
          }
        }
      }
    `
    return this.apollo.query({ query });
  }

  public createPropuesta(propuestaInput, propProductoInput) {
    const mutation = gql`
      mutation {
        createPropuesta(
          propuestaInput: ${Util.toGraphQlObj(propuestaInput)}, 
          propProductoInput: ${Util.toGraphQlList(propProductoInput)}
        ) {
          id
        }
      }
    `
    return this.apollo.mutate({ mutation });
  }


  public crearCotizacion(productos){
    const mutation = gql`mutation {
    registerCotizacion(
      cotizacionProductoInput:${Util.toGraphQlList(productos)}
    ) {
      id
    }
   }
    `;
    return this.apollo.mutate({ mutation });
  }

  propuestasCotizacion(cotizacion): Observable<any>{
    const query = gql `query {
      propuestas(cotizacionid: ${cotizacion})
        { id, total, descuento, estado,
          proveedor { nit, nombre },
          productos { nombre,id,cantidad ,referencia,valor_unitario}
        }
    }`;

    return this.apollo.query({query});
  }

  aceptarPropuesta(idCotizacion,idPropuesta){
    debugger
    const mutation = gql`mutation{
      acceptPropuesta(
        cotizacionid:${idCotizacion},
        propuestaid:${idPropuesta}
      ){
        id
      }
    }`;

    return this.apollo.mutate({mutation});
  }
}
