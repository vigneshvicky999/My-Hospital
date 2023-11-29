import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  submit:boolean=false
  
    ContactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^(?:\+\d{1,3})?[-.\s]?\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gender : new FormControl('',[Validators.required]),
    date: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.ContactForm.controls;
  
  }

  onSubmit() {
      this.submit=true;
      localStorage.setItem('form-data', JSON.stringify(this.ContactForm .value));     
      console.log(this.ContactForm.value)   
  }

}



