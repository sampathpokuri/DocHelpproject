import { Component, OnInit } from '@angular/core';
import { DocserveService } from '../docserve.service';
import { PatserveService } from '../patserve.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctor: any;
  var: any;
  rtd: any;
  obj: any;
  x: any;


  constructor(private service: DocserveService, private serve: PatserveService) {
    this.doctor = {
      docid: "", name: "", email: "", specialization: "", typeid: "", experience: ""
    };

  }

  ngOnInit(): void {
    this.rtd = localStorage.getItem('customer');
    this.var = localStorage.getItem('object');
    this.obj = JSON.parse(this.var);

    console.log('typeid:', this.rtd)
    console.log('obj:', this.obj);
    //  console.log('id:',this.x)
    this.service.getdoctorbytypeid(this.rtd).subscribe((result: any) => { this.doctor = result; });
    this.obj.docid = this.rtd;
    // this.serve.updatecustomer(this.obj).subscribe((result: any) => {console.log(result)})


    //  console.log('i am x',this.doctor)

  }
  log(docid: any) {

    console.log('hii', docid);
    this.obj.docid = docid
    console.log(this.obj)
    alert('booking successful')
    // this.serve.senddocid(docid)
    this.serve.updatecustomer(this.obj).subscribe((result: any) => { console.log(result) });

  }

}
