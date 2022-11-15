import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required]
    }) 
  }

  login() {
    const form: FormGroup = this.loginForm;
    if(form.valid) {
      console.log(form.value);        
      console.log('logando...');    
    } else {
      console.log('Form inválido.');
    }
  }

}
