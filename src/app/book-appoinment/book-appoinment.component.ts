import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AppointmentService } from '../service/appointment.service';


@Component({
  selector: 'app-book-appoinment',
  templateUrl: './book-appoinment.component.html',
  styleUrls: ['./book-appoinment.component.scss']
})
export class BookAppoinmentComponent {

  constructor(public AppointmentService: AppointmentService) { }
  valid: boolean = false
  submit: boolean = false

  @Output() disableBioButtonEvent = new EventEmitter<boolean>();

  maritals: any = [{ id: 'Mr', name: "Mr" }, { id: 'Mrs', name: "Mrs" }, { id: 'Miss', name: 'Miss' }];
  appointmentForm = new FormGroup({
    prefix: new FormControl('', [Validators.required]),
    fname: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]),
    lname: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^(?:\+\d{1,3})?[-.\s]?\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    age: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.appointmentForm.controls;
  }
  processing: boolean = false

  onSubmit() {

    this.processing = true
    this.submit = true
    this.disableBioButtonEvent.emit()
    localStorage.setItem('Slot Booked', JSON.stringify(this.appointmentForm.value));
    console.log(this.appointmentForm)
    setTimeout(() => {
      this.appointmentForm.reset()
      this.processing = false;
    }, 2000);
    alert("Your Booking for your slot is successfull")
    if (this.appointmentForm.valid) {
      this.valid = true
    }
    let modalClose = document.getElementById('modalCancel')
    modalClose?.click()
  }

}


