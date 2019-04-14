import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RegistroProductoService {

  constructor(private apollo: Apollo) { }

  registro(producto) {
    const mutation = gql`mutation {
      createProduct( productInput: {
        nombre: "${producto.nombre}",
        referencia: "${producto.referencia}",
        url: "${producto.url}"
      }){
        id
      }
    }`;
    return this.apollo.mutate({ mutation });
  }
}
