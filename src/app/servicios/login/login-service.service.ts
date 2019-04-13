import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private apollo: Apollo) { }

  login(usuario,contrasena) : Observable<any>{
    const queryGraph = gql`query{
      login(
        usuario:"${usuario}",
        password:"${contrasena}"
      ){
        id, token, userType
      }
    }`;
    return this.apollo.query({ query: queryGraph });
  }
}
