import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // the register form arguments are being set here to keep the Type Form Control
  // otherwise, FormGroup will change the type to AbstractControl
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  // if we use the validators directly on html angular will assume those values, check email minLength
  email = new FormControl('', [Validators.email]);
  age = new FormControl('');
  password = new FormControl('');
  confirm_password = new FormControl('');
  phone_number = new FormControl('');

  // FormGroup is needed to isolate different forms in the same page
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phone_number: this.phone_number,
  });
}
