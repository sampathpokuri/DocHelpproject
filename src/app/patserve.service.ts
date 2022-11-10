import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatserveService {
  isUserLogged:boolean;
  constructor(private httpclient: HttpClient) { 
    this.isUserLogged=false;
  }
  getAllcustomers(){
    return this.httpclient.get('getAllcustomers');
  }
  
  getcustomerbyid(customer: any){
    return this.httpclient.get('getcustomer/'+customer);
  }
  getcustomerbyemail(email: any){
    return this.httpclient.get('getcustomerbyemail/'+email);
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

  setUserLoggedIn(){
    this.isUserLogged=true;
  }
  setUserLoggedout(){
    this.isUserLogged=false;
  }
  getUserLogged(){
    return this.isUserLogged;
  }
  senddocid(docid: any): any {
    return this.httpclient.put('getdocid/',docid);
  } 
}
