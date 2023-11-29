import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AboutHospitalComponent } from './about-hospital/about-hospital.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { BiographyComponent } from './biography/biography.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent} from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http'
import { HomeCareComponent } from './home-care/home-care.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { AvailSpecialitiesComponent } from './avail-specialities/avail-specialities.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    AboutHospitalComponent,
    NavbarComponent,
    AboutComponent,
    BiographyComponent,
    FooterComponent,
    ContactComponent,
    HomeCareComponent,
    BookAppoinmentComponent,
    AdminPageComponent,
    RegisterComponent,
    LoginComponent,
    SpecialitiesComponent,
    AvailSpecialitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
