import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocserveService {
object:any;
  constructor(private httpclient:HttpClient) { }

  getAlldoctors(){
    return this.httpclient.get('getAlldoctors');
  }
  
  getdoctorbyid(doctor: any){
    return this.httpclient.get('getDoctor/'+doctor);
  }
  getdoctorbytypeid(doctor: any){
    return this.httpclient.get('getDoctorbytype/'+doctor);
  }


  registerdoctor(doctor: any): any {
    return this.httpclient.post('registerdoc', doctor);
  }

  updatedoctor(doctor: any): any {
    return this.httpclient.put('updatedoc', doctor);
  } 
  deletedoctor(doctor: any) {
    return this.httpclient.delete('deletedocbyid/' + doctor.typeid);
  }
}
