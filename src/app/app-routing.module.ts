import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProblemComponent } from './problem/problem.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes= [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'cart',canActivate:[AuthGuard], component:ProblemComponent},
  {path:'doctor', canActivate:[AuthGuard],component:DoctorComponent}
  // {path:'Employee',canActivate:[AuthGuard], component:EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
