import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;



  ngOnInit() {
    this.userForm = new FormGroup({
     'nom' : new FormControl(null, [Validators.required]),
  'telnum': new FormControl(null, 
    [Validators.required,
      Validators.pattern('^[0-9]+$')]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
     'password': new FormControl(null, [Validators.required]),
      'confirmpassword': new FormControl(null, [Validators.required])
    });


  }
 // register() {
//tabuser.push(this.userForm.value);
    //localStorage.setItem('User', JSON.stringify(this.userForm.value));
    //console.log(this.userForm.value.value);
  //}

}
