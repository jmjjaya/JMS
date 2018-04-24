import { AppliedPost } from './../../shared/models/appliedpost';
import { Applicant } from './../../shared/models/applicant';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
//import { APP_CONFIG, HttpConfig } from '../../app-config/app-config.constants';
import { JobPosition } from '../../shared/models/jobPosition';


@Injectable()
export class DataService {

  private dataRepo: {
    applicant: AppliedPost;
  };
  private _applicant: BehaviorSubject<AppliedPost>;
  public applilcant: Observable<AppliedPost>;

  constructor(private _http: HttpClient) {
    this.dataRepo = { applicant: new AppliedPost };
    this._applicant = <BehaviorSubject<AppliedPost>>new BehaviorSubject(new AppliedPost);
    this.applilcant = this._applicant.asObservable();
  }

  getApplilcantInfo() {
    this._http.get('http://localhost:3000/applicantinfo')
      .subscribe((response : AppliedPost) => {

        this.dataRepo.applicant = response;
        this._applicant.next(Object.assign({}, this.dataRepo).applicant);

      });
  }

}
