import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppointmentService } from '../service/appointment.service';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  isButtonDisable:boolean=false;
  docId:any;
  doctors:any[] = [];
  bookedBtn:Boolean=false
  bookingBtn:Boolean=true
 
  @ViewChild('content', { static: false }) content: ElementRef | any;

  constructor(private route: ActivatedRoute,private appointmentService:AppointmentService) {}

  ngOnInit() {                                                                        
    this.docId = this.route.snapshot.paramMap.get('id');
    this.appointmentService.fetchData().subscribe((getId):any=>{
    this.doctors = getId.filter((getId: {id:any}) => getId.id == this.docId)
    // return this.doctors==this.docId  
    })
    };

ondisable(){
 this.isButtonDisable=true
 this.bookedBtn=true
 this.bookingBtn=false
}

downloadPDF() {

  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'pt',
    format: 'a3',
  });
  pdf.html(this.content.nativeElement, {
    html2canvas: {
      width: 1000
    },
    callback: (pdf: jsPDF) => {
      pdf.save("doctor.pdf");
    }
  });
}

}



