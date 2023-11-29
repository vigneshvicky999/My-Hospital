import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-avail-specialities',
  templateUrl: './avail-specialities.component.html',
  styleUrls: ['./avail-specialities.component.scss']
})
export class AvailSpecialitiesComponent implements OnInit {
  items:any[]=[];
  specialities: any | undefined 
  setData: any[] | undefined;
  specialitiesValues:any 
  
  constructor(private appointmentService:AppointmentService,private route:ActivatedRoute,private router:Router ){}
  
  ngOnInit() {                                                                        
    this.specialities = this.route.snapshot.paramMap.get('id');
    this.appointmentService.seperateSpecialityData().subscribe((getId):any=>{
    this.items = getId.filter((getId: {id:any}) => getId.id == this.specialities)
  });
    this.specialitiesValues = this.route.snapshot.paramMap.get('specialitiesValue');
    this.appointmentService.fetchData().subscribe((data):any => {
      this.setData = data.filter((item: { specialitiesValue: any;}) => item.specialitiesValue == this.specialities);   
    });
    }

    data(value:any,filterValue:any) {
      this.router.navigate(['/biography',value,filterValue]);
      }
}
