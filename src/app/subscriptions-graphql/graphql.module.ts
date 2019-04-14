import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { DefaultOptions } from 'apollo-client';

import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import { environment } from './../../environments/environment';

@NgModule({
    exports: [HttpClientModule, ApolloModule, HttpLinkModule]
})
export class GraphQLConfigModule {
    constructor(apollo: Apollo, private httpClient: HttpClient) {
        const httpLink = new HttpLink(httpClient).create({
            uri: environment.url,
            headers: new HttpHeaders().set("Authorization", `Bearer ${sessionStorage.getItem('token')}`)
        });

        const subscriptionLink = new WebSocketLink({
            uri: environment.urlWS,
            options: {
                reconnect: true,
                connectionParams: {
                    authToken: sessionStorage.getItem('token') || null
                }
            }
        });

        const link = split(
            ({ query }) => {
                const { kind, operation } = getMainDefinition(query);
                return kind === 'OperationDefinition' && operation === 'subscription';
            },
            subscriptionLink,
            httpLink
        );

        const defaultOptions: DefaultOptions = {
            watchQuery: {
                fetchPolicy: 'network-only',
                errorPolicy: 'ignore',
            },
            query: {
                fetchPolicy: 'network-only',
                errorPolicy: 'all',
            },
        }

        apollo.create({
            link,
            cache: new InMemoryCache(),
            defaultOptions: defaultOptions
        });
    }
}