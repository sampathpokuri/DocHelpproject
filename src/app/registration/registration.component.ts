import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocserveService } from '../docserve.service';
import { PatserveService } from '../patserve.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 register:any;
  constructor(private service : PatserveService,private router: Router,private srv:DocserveService,private toastr:ToastrService) {
    this.register={
       cid:"",
      name:"",
     address:"",
      email:"",
      age:"",
      gender:"",
      phoneno:"",
      description:"",
      docid:"",
      password:""


    }
   }

  ngOnInit(): void {
  }
  reg(regForm:any){
this.register=regForm;
console.log(this.register)
this.service.registercustomer(this.register).subscribe((result: any) => {console.log(result)});
this.srv.object=this.register;

this.router.navigate(['cart']);
this.toastr.success("Registered Sucessfully");
  }

}
