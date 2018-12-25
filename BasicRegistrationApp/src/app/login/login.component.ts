import { Component, OnInit } from '@angular/core';
import {FormBuilder , Validators, Form} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  constructor(private fb: FormBuilder, private myRoute: Router, private auth: AuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  // This is not the preferred way of doing this, instead,
  // you should create an API service and connect to a database.
  // And then, check whether this email and password are valid or not,
  // and, lastly, you should set localStorage with the token you get from the server's API.
  // I am just setting the value email here.
  login() {
    if (this.form.valid) {
      this.auth.sendToken(this.form.value.email);
      this.myRoute.navigate(['home']);
    }
  }

}
