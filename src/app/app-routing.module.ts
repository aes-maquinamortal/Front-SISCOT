import { RegisterProductoComponent } from './register-producto/register-producto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { GuardaAutenticacionService } from './guarda/guarda-autenticacion.service';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { ListaCotizacionesComponent } from './lista-cotizaciones/lista-cotizaciones.component';
import { PropuestaComponent } from './propuesta/propuesta.component';
import { ListaPropuestaComponent } from './lista-propuesta/lista-propuesta.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [GuardaAutenticacionService]},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardaAutenticacionService]},
  { path: 'register', component: RegisterComponent },
  { path: 'register-producto', component: RegisterProductoComponent, canActivate: [GuardaAutenticacionService]},
  { path: 'carro-compras', component: CarroComprasComponent, canActivate: [GuardaAutenticacionService]},
  { path: 'register_company', component: RegisterCompanyComponent },
  { path: 'cotizaciones', component: ListaCotizacionesComponent, canActivate: [GuardaAutenticacionService]},
  { path: 'propuesta/:cotizacionId', component: ListaPropuestaComponent, canActivate: [GuardaAutenticacionService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
