import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-home-care',
  templateUrl: './home-care.component.html',
  styleUrls: ['./home-care.component.scss']
})
export class HomeCareComponent {


  submit = false
  states: any = [{ id: 1, name: "TamilNadu" }, { id: 2, name: "Kerala" }, { id: 3, name: "Andhra Pradesh" }];

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    address1: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    address2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    gridCheck: new FormControl('', [Validators.required]),

  });
  get r() {

    return this.registerForm.controls

  }

  onSubmit() {
    this.submit = true
    this.registerForm.reset()
    localStorage.setItem('registered', JSON.stringify(this.registerForm.value))
  }
}
