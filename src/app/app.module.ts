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
import { ChartsModule } from 'ng2-charts';
import { ProductoComponent } from './producto/producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

import { GraphQLConfigModule } from './subscriptions-graphql/graphql.module';
import { RegisterProductoComponent } from './register-producto/register-producto.component';
import { MainComponent } from './main/main.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { ListaCotizacionesComponent } from './lista-cotizaciones/lista-cotizaciones.component';
import { PropuestaComponent } from './propuesta/propuesta.component';
import { CotizacionClienteComponent } from './cotizacion-cliente/cotizacion-cliente.component';
import { ListaPropuestaComponent } from './lista-propuesta/lista-propuesta.component';

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
    MainComponent,
    DashboardsComponent,
    CarroComprasComponent,
    ListaCotizacionesComponent,
    PropuestaComponent,
    CotizacionClienteComponent,
    ListaPropuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    GraphQLConfigModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
