import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { AppointmentService } from '../service/appointment.service';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  setData: any = '';
  item: any = '';
  pages:number | undefined 

  constructor(private router: Router, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.fetchData().subscribe((data: any[]) => {
      this.setData = data;
      console.log('check', this.setData)
    });
  }

  data(id: any) {
    this.router.navigate(['/biography', id]);
  }

 
}
