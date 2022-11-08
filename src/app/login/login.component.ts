import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatserveService } from '../patserve.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer: any;
  loginForm: any;
  temp: any;
  allvar: any;
  toast: any;
  route: any;
  constructor(private service: PatserveService, private router: Router) {
    this.loginForm = {
      email: '',
      password: ''
    }
    this.allvar = [{
      email: '',
      password: ''
    }]
  }
  logForm: any = '';
  ngOnInit(): void {

    this.service.getAllcustomers().subscribe((result: any) => { this.allvar = result, console.log(this.allvar) });




  }

  log(logForm: any) {
    this.temp = 0;
    console.log(logForm)
    console.log(this.allvar)
    for (const i in this.allvar) {
      // console.log(this.allvar[i].email,'  ',this.allvar[i].password)
      this.temp = this.temp + 1;
      if (this.allvar[i].email == logForm.email && this.allvar[i].password == logForm.password) {
        this.loginForm = this.allvar[i];
        this.temp = this.temp - 1;
        console.log('login succesfull', this.loginForm)
        this.service.setUserLoggedIn();
        localStorage.setItem("object", JSON.stringify(this.loginForm));
        //  this.toast.success({detail:'Success',summary:'This is Success', sticky:true,position:'tr'})


        this.router.navigate(['cart']);


      }


    }
    console.log(this.temp, '  ', this.allvar.length)
    if (this.temp == this.allvar.length) {
      this.toast.error({ detail: 'Login Failed', summary: 'Please Verify your Details', sticky: true, position: 'tr' })

    }


    //     this.service.getcustomerbyemail(logForm.email,logForm.password).subscribe((result: any) => {this.loginForm=result});


    // console.log('email:',this.loginForm.email,'password:',this.loginForm.password)
    // this.service.getcustomerbyemail(logForm.email,logForm.password).subscribe((result: any) => {this.loginForm=result});


    // console.log('email:',this.loginForm.email,'password:',this.loginForm.password)
    // if(this.loginForm.email!='' && this.loginForm.password !=''){

    //   console.log('login succesfull',this.loginForm)
    //   localStorage.setItem("object", JSON. stringify(this.loginForm));

    //   this.router.navigate(['cart']);
    // }

    //   else{
    //     this.service.getcustomerbyemail(logForm.email,logForm.password).subscribe((result: any) => {this.loginForm=result});

    // console.log('email:',this.loginForm.email,'password:',this.loginForm.password)
    // if(this.loginForm.email!='' && this.loginForm.password !=''){

    //   console.log('login succesfull',this.loginForm)
    //   localStorage.setItem("object", JSON. stringify(this.loginForm));

    //   this.router.navigate(['cart']);
    // }
    // else{
    //   alert('failed')
    //   console.log("failed")
    // }
    //   }



  }

}


