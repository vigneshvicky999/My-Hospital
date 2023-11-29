import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements DoCheck{
  isFooterRequired:boolean=false
  constructor(private router : Router){}

  ngDoCheck(): void {
    let currentUrl=this.router.url;
    console.log(currentUrl)
    if(currentUrl =='/' || currentUrl =='/register')   {
     this.isFooterRequired=true
    }else{
   this.isFooterRequired=false
    }
    
   
     }
}
