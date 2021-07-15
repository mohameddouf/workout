import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { Validators } from '@angular/forms'
//import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(
    //private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required])

    })
  }
  login() {
    console.log(this.loginForm.value);

    localStorage.setItem('login', JSON.stringify(this.loginForm.value));
    let test = localStorage.getItem('tabuser');
    console.log(test);
    // this.router.navigateByUrl("training");


  }
}
