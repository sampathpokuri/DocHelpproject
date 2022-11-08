import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProblemserviceService } from '../problemservice.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  problem: any;
  constructor(private service: ProblemserviceService, private router: Router) {

    this.problem = {
      typeid: '',
      type: ''
    };
  }

  ngOnInit(): void {
    this.problem = this.service.getallproblems().subscribe((result: any) => { this.problem = result; });
    console.log(this.problem);
    // this.problem=this.service.getproblembyid(1001).subscribe((result: any) => {this.problem= result;});
    // console.log(this.problem);
  }
  getallproblems() {

  }
  getid(typeid: any) {
    console.log(typeid);
    localStorage.setItem("customer", typeid);
    this.router.navigate(['doctor']);
  }

}
