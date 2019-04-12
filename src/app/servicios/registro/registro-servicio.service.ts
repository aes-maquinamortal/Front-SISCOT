import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroServicioService {
  url = environment.url;
  constructor(private http: HttpClient) { 

  }

  registroPersona(persona) {
    const mutation = `mutation {
      registerClient(clienteInput: {
        identificacion: "${persona.identificacion}",
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
    
    return this.http.post(this.url, {query: mutation});
  }

  registroProveedor(proveedor) {
   const mutation = `mutation {
      registerSupplier(proveedorInput: {
        nit: "${proveedor.identificacion}",
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
    return this.http.post(this.url, {query: mutation});
  }



}
