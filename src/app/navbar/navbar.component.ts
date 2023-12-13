import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
constructor(private router :Router){}
isNavbarRequired:Boolean=false
isMenuOpen:boolean=true
toggleMenu(){
this.isMenuOpen = !this.isMenuOpen
}

ngDoCheck(): void {
 let currentUrl=this.router.url;
 if(currentUrl =='/' || currentUrl =='/register')   {
  this.isNavbarRequired=true
 }else{
this.isNavbarRequired=false
 }
  }

}
