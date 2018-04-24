import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = "http://localhost:3000/recruiter";
const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable()
export class RecruiterService {

  constructor(private httpClient: HttpClient) { }
  
  getRecruiter(){
    return this.httpClient.get(url);
  }

  // createRecruiter(newRecruiter){
  //   let body = JSON.stringify(newRecruiter);
  //   return this.httpClient.post(url,body,httpOptions);
  // }

  createNewJob(newJob){
    let body = JSON.stringify(newJob);
    return this.httpClient.post(url,body, httpOptions);
  }
  
}
