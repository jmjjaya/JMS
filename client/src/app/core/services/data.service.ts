import { AppliedPost } from './../../shared/models/appliedpost';
import { Applicant } from './../../shared/models/applicant';
import { Credentials } from './../../shared/models/credentials';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Recruiter } from '../../recruiter/recruiter';
//import { APP_CONFIG, HttpConfig } from '../../app-config/app-config.constants';
import { JobPosition } from '../../shared/models/jobPosition';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const url = "http://localhost:3000/api";

@Injectable()
export class DataService {

  private dataRepo: {
    applicant: AppliedPost,
    credentials: Credentials,
    jobPosition: JobPosition,
    recruiter: Recruiter,
    authenticated: boolean,
  };

  private _applicant: BehaviorSubject<AppliedPost>;
  public applilcant: Observable<AppliedPost>;

  private _credentials: BehaviorSubject<Credentials>;
  public credentials: Observable<Credentials>;

  private _jobPosition: BehaviorSubject<JobPosition>;
  public jobPosition: Observable<JobPosition>;

  private _recruiter: BehaviorSubject<Recruiter>;
  public recruiter: Observable<Recruiter>;

  constructor(private _http: HttpClient) {
    this.dataRepo = {
      applicant: new AppliedPost,
      credentials: new Credentials,
      jobPosition: new JobPosition,
      recruiter: new Recruiter,
      authenticated: false,

    };

    this._applicant = <BehaviorSubject<AppliedPost>>new BehaviorSubject(new AppliedPost);
    this.applilcant = this._applicant.asObservable();

    this._credentials = <BehaviorSubject<Credentials>>new BehaviorSubject(new Credentials);
    this.credentials = this._credentials.asObservable();

    this._jobPosition = <BehaviorSubject<JobPosition>>new BehaviorSubject(new JobPosition);
    this.jobPosition = this._jobPosition.asObservable();

    this._recruiter = <BehaviorSubject<Recruiter>>new BehaviorSubject(new Recruiter);
    this.recruiter = this._recruiter.asObservable();
  }

  getApplicantInfo() {

    console.log('hereeee');

    const token = localStorage.getItem('jwt');
    console.log({token});
    if (token) {
      const options = {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
      };
      console.log(token);
      this._http.get(`${url}/applicant/info`, options)
        .subscribe((response: AppliedPost) => {
          console.log(response);
          this.dataRepo.applicant = response;
          this._applicant.next(Object.assign({}, this.dataRepo).applicant);
        });
    }
  }

  isAuthenticated() {
    return this.dataRepo.authenticated;
  }

  login(credentials: any) {
    this._http.post(`${url}/auth/login`, credentials, httpOptions).subscribe(
      (response: Credentials) => {

        localStorage.setItem('jwt', response.token);

        this.dataRepo.credentials = response;
        this._credentials.next(Object.assign({}, this.dataRepo).credentials);

        this.dataRepo.authenticated = true;

      },
      err => console.error('login error', err)
    );
  }

  logout() {
    localStorage.removeItem('jwt');
    this.dataRepo.authenticated = false;
  }

  register(user: any) {


    this._http.post(`${url}/auth/register`, user, httpOptions).subscribe(
      (response: Credentials) => {
        localStorage.setItem('jwt', response.token);

        this.dataRepo.credentials = response;
        this._credentials.next(Object.assign({}, this.dataRepo).credentials);

        this.dataRepo.authenticated = true;
      },
      err => console.error('register error', err)
    );
  }


  getJobPosition() {
    this._http.get(url + "/jobPosition").subscribe((response: JobPosition) => {
      this.dataRepo.jobPosition = response;
      this._jobPosition.next(Object.assign({}, this.dataRepo).jobPosition);
    });
  }

  createNewJob(newJob) {
    let body = JSON.stringify(newJob);
    return this._http.post(url + "/jobPosition/create", body, httpOptions);
  }

  getRecruiter() {
    return this._http.get(url);
  }

  getRecruiterByName(name) {
    this._http.get(`${url}/recruiter/${name}`).subscribe((response: Recruiter) => {
      this.dataRepo.recruiter = response;
      this._recruiter.next(Object.assign({}, this.dataRepo).recruiter);
    }

    );
  }

  createRecruiter(newRecruiter) {
    
    let body = newRecruiter;
    return this._http.post(url+"/recruiter/create", body, httpOptions).subscribe(
      result => {
        console.log("Creating Recruiter.....");
        return true;
      },
      err => {
        console.error(err)
      }
    );
  }

  updateApplicantInfo(applicantInfo) {

    const token = localStorage.getItem('jwt');
    console.log(token);
    if (token) {
      const options = {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${token}`,'Content-Type': 'application/json' })
      };
      let body = JSON.stringify(applicantInfo);
      return this._http.post(`${url}/applicant/update`, body, options);
    }
  }
}
