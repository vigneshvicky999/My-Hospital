import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
loading:boolean=true;
ngOnInit() {
  // Set a timeout to show the spinner after 2000 milliseconds (2 seconds)
  setTimeout(() => {
    this.loading = true;
  }, 2000);
}
}
