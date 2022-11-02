import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  constructor(private httpClient:HttpClient) { }
  getallpatients(){
    return this.httpClient.get('getallproblem');
  }
registerproblem(problem: any): any {
  return this.httpClient.post('registerProblem', problem);
  }
updateproblem(problem: any): any {
  return this.httpClient.put('updateproblem', problem);
  }
deleteproblem(problem: any) {
  return this.httpClient.delete('deleteproblembyid/' + problem.typeid);
  }
getproblembyid(problem: any){
  return this.httpClient.get('getproblem/'+problem.typeid);
  }

}
