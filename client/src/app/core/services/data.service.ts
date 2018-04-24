import { AppliedPost } from './../../shared/models/appliedpost';
import { Applicant } from './../../shared/models/applicant';
import { Credentials } from './../../shared/models/credentials';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';

import { JobPosition } from '../../shared/models/jobPosition';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  private dataRepo: {
    applicant: AppliedPost,
    credentials: Credentials
  };

  private _applicant: BehaviorSubject<AppliedPost>;
  public applilcant: Observable<AppliedPost>;

  private _credentials: BehaviorSubject<Credentials>;
  public credentials: Observable<Credentials>;

  private apiRoot: string = 'http://localhost:3000'

  constructor(private _http: HttpClient) {
    this.dataRepo = { applicant: new AppliedPost, credentials: new Credentials };

    this._applicant = <BehaviorSubject<AppliedPost>>new BehaviorSubject(new AppliedPost);
    this.applilcant = this._applicant.asObservable();

    this._credentials = <BehaviorSubject<Credentials>>new BehaviorSubject(new Credentials);
    this.credentials = this._credentials.asObservable();
  }

  getApplicantInfo() {

    const token = localStorage.getItem('jwt');

    if (token) {
      const options = {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
      };

      this._http.get(`${this.apiRoot}/api/applicant/info`, options)
        .subscribe((response : AppliedPost) => {

          this.dataRepo.applicant = response;
          this._applicant.next(Object.assign({}, this.dataRepo).applicant);

        });
    }
  }

  login(credentials: any) {
    this._http.post(`${this.apiRoot}/api/auth/login`, credentials, httpOptions).subscribe(
      (response: Credentials) => {

        localStorage.setItem('jwt', response.token);

        this.dataRepo.credentials = response;
        this._credentials.next(Object.assign({}, this.dataRepo).credentials);

      },
      err => console.error('login error', err)
    );
  }

  register(user: any) {
    this._http.post(`${this.apiRoot}/api/auth/register`, user, httpOptions).subscribe(
      (response : Credentials) => {

        localStorage.setItem('jwt', response.token);

        this.dataRepo.credentials = response;
        this._credentials.next(Object.assign({}, this.dataRepo).credentials);
      },
      err => console.error('register error', err)
    );
  }

}
