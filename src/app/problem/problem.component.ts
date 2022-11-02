import { Component, OnInit } from '@angular/core';
import { ProblemServiceService } from '../problem-service.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
problem:any;
  constructor(private service:ProblemServiceService) {
    this.problem={
      typeid:'',
      type:''
    }
   }



  ngOnInit(): void {
    this.problem=this.service.getallproblems().subscribe((result: any) => {this.problem= result;});
    console.log(this.problem);
  }
   getallproblems(){
  //   this.problem=this.service.getallproblems().subscribe((result: any) => {this.problem= result;});
  //   console.log(this.problem);
  }

}
