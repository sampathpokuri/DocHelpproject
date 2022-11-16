import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemComponent } from './problem/problem.component';
import {HttpClientModule } from '@angular/common/http';
 import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Toast, ToastrModule } from 'ngx-toastr';
import { PatientwdoctorComponent } from './patientwdoctor/patientwdoctor.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PatientlistComponent } from './patientlist/patientlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemComponent,
    RegistrationComponent,
    NavbarComponent,
    DoctorComponent,LoginComponent, HomeComponent, PatientwdoctorComponent, LogoutComponent, ContactusComponent, AboutusComponent, PatientlistComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ToastrModule.forRoot(), 
      BrowserAnimationsModule,     
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
