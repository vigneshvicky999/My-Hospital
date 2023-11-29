import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.scss']
})
export class SpecialitiesComponent implements OnInit {


speciality:any;
constructor(private specialities:AppointmentService,private router:Router){}


ngOnInit(): void {
  this.specialities.specialitiesData().subscribe((res:any) => {
    this.speciality = res;
  });
}

data(id: any): void {
  if (id) {
    this.router.navigate(['avail-speciality', id]);
  } else {
    alert('Invalid id');
  }
}
}
