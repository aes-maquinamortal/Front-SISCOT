import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroProductoService } from './../servicios/registro-producto/registro-producto.service';

@Component({
  selector: 'app-register-producto',
  templateUrl: './register-producto.component.html',
  styleUrls: ['./register-producto.component.css']
})
export class RegisterProductoComponent implements OnInit {
  tipo = 'https://image.flaticon.com/icons/png/512/54/54718.png';
  registerForm: FormGroup;
  submitted = false;
  f;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: RegistroProductoService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      referencia: ['', Validators.required],
      url: ['', Validators.required]
    });

    this.f = this.registerForm.controls;
  }

  register() {
    const producto = {
      nombre: this.registerForm.value.nombre,
      referencia: this.registerForm.value.referencia,
      url: this.registerForm.value.url
    };

    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.service.registro(producto).subscribe(
      res => {
        alert('Registro del producto exitoso');
        this.router.navigateByUrl('/home');
      }
    );

  }
}
