import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatserveService {

  constructor(private httpclient: HttpClient) { }
  getAllcustomers(){
    return this.httpclient.get('getAllcustomers');
  }
  
  getcustomerbyid(customer: any){
    return this.httpclient.get('getcustomer'+customer.docid);
  }


  registercustomer(customer: any): any {
    return this.httpclient.post('registercustomer', customer);
  }

  updatecustomer(customer: any): any {
    return this.httpclient.put('updatecustomer', customer);
  } 
  deletecustomer(customer: any) {
    return this.httpclient.delete('deletecustomerbyid/' + customer.typeid);
  }
}