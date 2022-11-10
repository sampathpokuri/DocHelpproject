import { Component, OnInit } from '@angular/core';
import { DocserveService } from '../docserve.service';
@Component({
  selector: 'app-patientwdoctor',
  templateUrl: './patientwdoctor.component.html',
  styleUrls: ['./patientwdoctor.component.css']
})
export class PatientwdoctorComponent implements OnInit {
  var: any ;
  obj: any;
  docid:any;
  docobj:any;

  constructor(private service : DocserveService) {
    this.var=''
   }

  ngOnInit(): void {
    this.var = localStorage.getItem('object');
    this.obj = JSON.parse(this.var);
    console.log(this.obj);
    this.docid=this.obj.docid;
    console.log(this.docid);
    this.service.getdoctorbyid(this.docid).subscribe((result: any) => { this.docobj = result; console.log(this.docobj)});
  }

}
