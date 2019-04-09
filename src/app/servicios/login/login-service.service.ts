import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.url;
  constructor(private http: HttpClient) { }

  login(usuario,contrasena) : Observable<any>{
    const queryGraph = `query{
      login(
        usuario:"${usuario}",
        password:"${contrasena}"
      ){
        usuario,token
      }
    }`;
    return this.http.post(this.url, {query: queryGraph});
  }
}
