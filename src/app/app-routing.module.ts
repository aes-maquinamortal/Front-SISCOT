import { RegisterProductoComponent } from './register-producto/register-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { GuardaAutenticacionService } from './guarda/guarda-autenticacion.service';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [GuardaAutenticacionService]},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardaAutenticacionService]},
  { path: 'register', component: RegisterComponent },
  { path: 'register-producto', component: RegisterProductoComponent, canActivate: [GuardaAutenticacionService]},
  { path: 'register_company', component: RegisterCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
