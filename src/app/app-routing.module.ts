import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutHospitalComponent } from './about-hospital/about-hospital.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { BiographyComponent } from './biography/biography.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeCareComponent } from './home-care/home-care.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guard/auth.guard';
import { AvailSpecialitiesComponent } from './avail-specialities/avail-specialities.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'abouts',
    component: AboutHospitalComponent, canActivate: [authGuard]
  },
  {
    path: 'navbar',
    component: NavbarComponent, canActivate: [authGuard]
  },
  {
    path: 'about',
    component: AboutComponent, canActivate: [authGuard]
  },
  {
    path: 'home',
    component: HomeComponent, canActivate: [authGuard]
  },
  {
    path: 'doctors',
    component: DoctorComponent, canActivate: [authGuard]
  },
  {
    path: 'specialities',
    component: SpecialitiesComponent, canActivate: [authGuard]
  },
  {
    path: 'biography/:id',
    component: BiographyComponent,canActivate: [authGuard]
  },
  {
    path: 'contact',
    component: ContactComponent, canActivate: [authGuard]
  },
  {
    path: 'footer',
    component: FooterComponent, canActivate: [authGuard]
  },
  {
    path: 'home-care',
    component: HomeCareComponent, canActivate: [authGuard]
  },
  {
    path: 'book-appointment',
    component: BookAppoinmentComponent,canActivate: [authGuard]
  },
  {
    path: 'admin',
    component: AdminPageComponent, canActivate: [authGuard]
  },
  {
    path: 'avail-speciality/:id',
    component: AvailSpecialitiesComponent, canActivate: [authGuard]
  },
  {
    path: 'avail-speciality/:specialitiesValue',
    component: AvailSpecialitiesComponent, canActivate: [authGuard]
  },
  {
    path: 'terms&condition',
    component: TermsAndConditionComponent, canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
