import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginwithcustomerComponent } from './loginwithcustomer/loginwithcustomer.component';
import { ProblemComponent } from './problem/problem.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'',component:LoginwithcustomerComponent},
  {path:'loginwithcustomer',component:LoginwithcustomerComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'cart',component:ProblemComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
