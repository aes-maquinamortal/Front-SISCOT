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
    debugger
    const mutation = `mutation {
      registerClient(clienteInput: {
        identificacion: "${persona.identificacion}",
        tipo_identificacion: "${persona.tipoIdentificacion}",
        nombre: "${persona.nombre}",
        usuario: "${persona.usuario}",
        direccion:"${persona.direccion}"
      }, usuarioInput: {
        usuario: "${persona.usuario}",
        password: "${persona.password}",
        correo: "${persona.email}",
        tipo: "${persona.tipo}"
      }){
        identificacion
      }
    }`;
    return this.http.post(this.url, {query: mutation});
  }

  registroProveedor() {
    
  }



}
