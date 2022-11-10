import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientwdoctorComponent } from './patientwdoctor/patientwdoctor.component';
import { ProblemComponent } from './problem/problem.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes= [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'cart',canActivate:[AuthGuard], component:ProblemComponent},
  {path:'doctor', canActivate:[AuthGuard],component:DoctorComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'patwithdoc', component:PatientwdoctorComponent},
  // {path:'Employee',canActivate:[AuthGuard], component:EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
