import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemComponent } from './problem/problem.component';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { LoginwithcustomerComponent } from './loginwithcustomer/loginwithcustomer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    AppComponent,
    ProblemComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginwithcustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
