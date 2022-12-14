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
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [Validators.min(18), Validators.max(120)]);
  password = new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
    ]);
  confirm_password = new FormControl('', [
    Validators.required
  ]);
  phone_number = new FormControl('',
    [
      Validators.required,
      Validators.maxLength(9),
      Validators.minLength(9)
    ]);

  showAlert = false
  alertMsg = 'Please wait! Your account is being created.'
  alertColor = 'blue'

  // FormGroup is needed to isolate different forms in the same page
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phone_number: this.phone_number,
  });

  register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';
  }
}
