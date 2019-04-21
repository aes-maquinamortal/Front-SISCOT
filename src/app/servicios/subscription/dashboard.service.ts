import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private apollo: Apollo) { }

  public dashboardInfo(cotizacionid) {
    const query = gql`
      query {
        getProposalsDashboard(cotizacionid: ${cotizacionid}) {
          proveedores, propuestasAceptadas
        }
      }
    `;
    return this.apollo.watchQuery({ query });
  }
}
