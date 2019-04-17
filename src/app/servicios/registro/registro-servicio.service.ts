import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RegistroServicioService {
  constructor(private apollo: Apollo) { }

  registroPersona(persona) {
    const mutation = gql`mutation {
      registerClient(clienteInput: {
        identificacion: ${persona.identificacion},
        tipo_identificacion: "${persona.tipoIdentificacion}",
        nombre: "${persona.nombre}",
        direccion:"${persona.direccion}"
      }, usuarioInput: {
        usuario: "${persona.usuario}",
        password: "${persona.password}",
        correo: "${persona.correo}",
        tipo: "${persona.tipo}"
      }){
        identificacion
      }
    }`;
    
    return this.apollo.mutate({ mutation });
  }

  registroProveedor(proveedor) {
   const mutation = gql`mutation {
      registerSupplier(proveedorInput: {
        nit: ${proveedor.identificacion},
        nombre: "${proveedor.nombre}",
        direccion:"${proveedor.direccion}"
      }, usuarioInput: {
        usuario: "${proveedor.usuario}",
        password: "${proveedor.password}",
        correo: "${proveedor.email}",
        tipo: "${proveedor.tipo}"
      }){
        nit
      }
    }`
    return this.apollo.mutate({ mutation });
  }



}
