import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { registerModel } from './register.interface';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerObj: registerModel = new registerModel();
  storedRegisterInput: any[]=[]
  submit: boolean = false

  constructor(private authentication: AuthService, private router: Router) { }

  registerForm = new FormGroup({
    name_: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]),
    userName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]),
    dob: new FormControl('', [Validators.required]),
    email_: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mobile: new FormControl('', [Validators.required, Validators.pattern(/^(?:\+\d{1,3})?[-.\s]?\d{10}$/)]),
  });

  get inputControls() {
    return this.registerForm.controls
  }


  onRegisterSubmitForm() {
    this.submit = true;
    this.registerObj.name_ = this.registerForm.value.name_;
    this.registerObj.userName = this.registerForm.value.userName;
    this.registerObj.dob = this.registerForm.value.dob;
    this.registerObj.email_ = this.registerForm.value.email_;
    this.registerObj.password = this.registerForm.value.password;

    if (this.registerForm.valid) {
      this.authentication.postRegister(this.registerObj).subscribe(res => {
        this.storedRegisterInput.push(this.registerForm.value)
        alert('Registered Successfully');
        this.router.navigate(['']);
      });
    } else {
      alert('Please enter valid data');
    }
  }

}