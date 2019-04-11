import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
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

      proveedor: ['', [Validators.required]],
      nit: ['', [Validators.required]],
      tipo: ['',[]]
    });

    this.f = this.registerForm.controls;
  }

  register() {
    
    this.submitted = true;
    debugger
    if (this.registerForm.invalid) {
      return;
    }

    this.router.navigateByUrl('/home');
  }
}