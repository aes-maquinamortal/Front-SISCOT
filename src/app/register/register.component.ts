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
  tipo : string = "PERSONA";
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
      tipoIdentificacion:['', Validators.required],
      username: ['', Validators.required],
      usuario: ['', Validators.required],
      direccion: ['', Validators.required],
      usermail: ['', Validators.required],
      password: ['', [Validators.required]],

      proveedor: ['', []],
      nit: ['', []],
      tipo: ['',[]]
    });

    this.f = this.registerForm.controls;
  }

  register(){
    this.tipo === "PERSONA" ? this.registerCliente() : this.registerProveedor();
  }

  registerProveedor(){


  }


  registerCliente() {
    const persona = {identificacion: this.registerForm.value.identificacion,
      tipoIdentificacion: this.registerForm.value.tipoIdentificacion,
      nombre: this.registerForm.value.username, usuario: this.registerForm.value.usuario,
      direccion: this.registerForm.value.direccion, password: this.registerForm.value.password,
      correo: this.registerForm.value.usermail, tipo: this.tipo};
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.service.registroPersona(persona).subscribe(
      res => {
        alert("Registro exitoso");
        this.router.navigateByUrl('/login');
      }
    )
    
  }
}