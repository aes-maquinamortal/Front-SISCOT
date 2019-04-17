import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroServicioService } from '../servicios/registro/registro-servicio.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  tipo: string = "CLIENTE";
  registerForm: FormGroup;
  submitted = false;
  tipoProveedor = 'INTERNO';
  f;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: RegistroServicioService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      identificacion: ['', Validators.required],

      tipoIdentificacion: ['CC', []],
      username: ['', Validators.required],
      usuario:['', Validators.required],
      direccion: ['', Validators.required],
      usermail: ['', Validators.required],
      password: ['', Validators.required],
      tipo: ['', []]
    });

    this.f = this.registerForm.controls;
  }

  register() {
    this.tipo === "CLIENTE" ? this.registerCliente() : this.registerProveedor();
  }

  registerProveedor() {
    const proveedor = {
      identificacion: +this.registerForm.value.identificacion,
      nombre: this.registerForm.value.username,
      usuario: this.registerForm.value.usuario,
      direccion: this.registerForm.value.direccion,
      password: this.registerForm.value.password,
      email: this.registerForm.value.usermail,
      tipo: this.tipo+"_"+this.tipoProveedor
    };
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.service.registroProveedor(proveedor).subscribe(
      res => {
        alert("Registro exitoso proveedor");
        this.router.navigateByUrl('/login');
      })
  }


  registerCliente() {
    const persona = {
      identificacion: +this.registerForm.value.identificacion,
      tipoIdentificacion: this.registerForm.value.tipoIdentificacion,
      nombre: this.registerForm.value.username,
      usuario: this.registerForm.value.usuario,
      direccion: this.registerForm.value.direccion,
      password: this.registerForm.value.password,
      correo: this.registerForm.value.usermail,
      tipo: this.tipo
    };
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.service.registroPersona(persona).subscribe(
      res => {
        alert("Registro exitoso persona");
        this.router.navigateByUrl('/login');
      }
    )

  }
}