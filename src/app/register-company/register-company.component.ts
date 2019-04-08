import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  registercompanyForm: FormGroup;
  submitted = false;
  f;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.registercompanyForm = this.formBuilder.group({
      nit: ['', Validators.required],
      nombreempresa: ['', Validators.required],
      usermail: ['', Validators.required],
      direccion: ['', Validators.required],
      pais: ['', Validators.required],
      password: ['', [Validators.required]]
    });
    this.f = this.registercompanyForm.controls;
  }

  registerCompany() {
    this.submitted = true;

    if (this.registercompanyForm.invalid) {
      return;
    }

    this.router.navigateByUrl('/home');
  }

}
