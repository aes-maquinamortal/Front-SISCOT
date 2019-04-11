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

  registroPersona(){

  }
  registroProveedor(){
    
  }



}
