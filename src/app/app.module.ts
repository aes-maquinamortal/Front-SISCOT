import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './producto/producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

import { GraphQLConfigModule } from './subscriptions-graphql/graphql.module';
import { RegisterProductoComponent } from './register-producto/register-producto.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    RegisterCompanyComponent,
    ProductoComponent,
    ListaProductosComponent,
    RegisterProductoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    GraphQLConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
