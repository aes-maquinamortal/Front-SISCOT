import { LoginService } from './../servicios/login/login-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  f;
  errorMessage: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });

    this.f = this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(res => {
        if (res.data.login) {
          sessionStorage.setItem('token', res.data.login.token);
          sessionStorage.setItem('id', res.data.login.id);
          sessionStorage.setItem('userType', res.data.login.userType);
          this.router.navigateByUrl('/home');
        } else {
          this.errorMessage = res.errors[0].message
        }
      });
  }

}
