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

  constructor(private route: ActivatedRoute,private appointmentService:AppointmentService) { 
  }

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

// downloadContent(){
//   var exportpdf = `<!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Print</title>
//   </head>
//   <style>
//     @page {
//       size: auto;
//       margin: 50px 50px 100px 50px;
//     }
  
//     body {
//       margin: 0;
//       padding: 0;
//       font-family: Arial, Helvetica, sans-serif;
     
//     }
  
//     table {
  
//       width: 100%;
//       text-align: left;
//     }
  
  
  
//     thead {
//       display: table-header-group;
//       margin-bottom: 20px;
//     }
  
//     thead tr {
//       border-bottom: 2px solid black;
//     }
  
//     .b-t {
//       border-top: 2px solid gray;
//     }
  
//     thead tr th {
//       padding-right: 10px;
//       height: 40px;
  
//     }
  
//     tfoot {
//       display: table-footer-group;
//     }
  
//     tfoot tr td {
//       text-align: center;
//     }
  
//     table,
//     td,
//     th {
//       border-collapse: collapse;
  
//     }
  
//     .text-right {
//       text-align: right;
//     }
  
//     .stamp {
//       width: 150px;
//       max-width: 150px;
//       height: auto;
//     }
//     .table{
//      display:flex;
//       justify-content:center;
//       align-item:center;
//     }
  
//     @media print {}
//   </style>
  
//   <body>
  
//   <table class="table mt-2" *ngIf="doctors.length > 0">
//   <tbody>
//     <tr *ngFor="let doctor of doctors">
//       <td>
//         <img src="{{doctor.url}}" class="edwin" alt="Images">
//       </td>
//       <td class="body">
//         <h2><b>{{doctor.name}}</b></h2>
//         <h3>{{doctor.role_}}</h3>
//         <p>{{doctor.studies_}}</p>
//         <h5><b>{{doctor.header_}}</b></h5>
//         <p>{{doctor.specialist_}}</p>
//         <h5><b>{{doctor.langHeader_}}</b></h5>
//         <p>{{doctor.language_}}</p>
//       </td>
//       <td class="buttons">
//         <button routerLink="#" class="btn btn-primary">Call now <i class="bi bi-telephone-outbound"></i></button>
//         <button routerLink="#" [disabled]="isButtonDisable" class="btn btn-success" *ngIf="bookedBtn">Booked <i
//             class="bi bi-calendar-check"></i></button>
//         <button class="btn btn-primary" [disabled]="isButtonDisable" *ngIf="bookingBtn" data-bs-toggle="modal"
//           data-bs-target="#staticBackdrop">Book Appointment <i class="bi bi-calendar"></i> </button>
//       </td>
//       <td>
//         <a (click)="downloadPDF()"><i class="bi bi-filetype-pdf"></i></a>
//       </td>
//     </tr>
//   </tbody>
// </table>

//       </table>
  
//     </div>
  
//   </body>
  
//   </html>`
//   return exportpdf
// }


