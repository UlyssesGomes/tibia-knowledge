import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required]
    }) 
  }

  login() {
    const form: FormGroup = this.loginForm;
    if(form.valid) {
      this.router.navigate(['/home']);
    }
  }

}
