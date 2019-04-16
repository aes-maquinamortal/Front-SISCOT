import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

  constructor(private apollo: Apollo) { }

  productosCliente(listaCarrito): Observable<any>{
    const query = gql`query{
      products(productIds : ${listaCarrito}){
        id,nombre,referencia,url
      }
    }`;
    return this.apollo.query({query});

  }

  productosProveedor(idProveedor): Observable<any>{
    const query = gql`query{
      products(proveedorid : "${idProveedor}"){
        id,nombre,referencia,url
      }
    }`;

    return this.apollo.query({query});
  }
}
