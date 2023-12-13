import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../service/appointment.service';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  submit:boolean=false
  patientDataStorage:any[]=[]
  toPassValue:any
constructor(private patientDetailService : AppointmentService){}
  patientDetails=new FormGroup({
    fname:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required]),
    pname:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    lang:new FormControl('',[Validators.required]),
    checked:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    address1:new FormControl('',[Validators.required]),
    address2:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    zip:new FormControl('',[Validators.required]),
    dateofAdmission:new FormControl('',[Validators.required]),
    causeForAdmission:new FormControl('',[Validators.required]),
    doctorDeals:new FormControl('',[Validators.required]),
    activeStatus:new FormControl('',[Validators.required]),
  })
  ngOnInit(): void {
    this.getPatientDetails()
  }
  getPatientDetails(){
    this.patientDetailService.getPatientDetails().subscribe(res=>{
      this.patientDataStorage = res
    })
  }
  postPatientDetails(patientDetails:Array<{
    name:string,
    lname:string,
    pname:string,
    dob:string,
    lang:string,
    checked:string,
    email:string,
    phone:string,
    address1:string,
    address2:string,
    city:string,
    state:string,
    zip:string;
    causeForAdmission:string
}>)
  {
    this.submit=true
    const datapost = {patientDetails}
    this.patientDetailService.postPatientDetails(datapost).subscribe(res=>{
    this.patientDataStorage.push(datapost)
    console.log('value',this.patientDetails.value)
    this.patientDetails.reset()
   })
  }
}
