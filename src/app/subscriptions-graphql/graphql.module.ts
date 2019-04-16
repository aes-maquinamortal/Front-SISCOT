import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloLink, concat } from 'apollo-link';
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
            uri: environment.url
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

        const authMiddleware = new ApolloLink((operation, forward) => {
            if(sessionStorage.getItem('token')){
                operation.setContext({
                    headers: {
                        authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                });
            }

            return forward(operation);
        })

        apollo.create({
            link: concat(authMiddleware, link),
            cache: new InMemoryCache(),
            defaultOptions: defaultOptions
        });
    }
}