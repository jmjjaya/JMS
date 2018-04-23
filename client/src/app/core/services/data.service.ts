import { Applicant } from './../../shared/models/applicant';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
//import { APP_CONFIG, HttpConfig } from '../../app-config/app-config.constants';


@Injectable()
export class DataService {

  private dataRepo: {
    applicant: Applicant;
  };
  private _applicant: BehaviorSubject<Applicant>;
  public applilcant: Observable<Applicant>;

  constructor(private _http: HttpClient) {
    this.dataRepo = { applicant: new Applicant };
    this._applicant = <BehaviorSubject<Applicant>>new BehaviorSubject(new Applicant);
    this.applilcant = this._applicant.asObservable();
  }

  getApplilcantInfo() {
    this._http.get('http://localhost:3000/applicant')
      .subscribe((response: Applicant) => {
        this.dataRepo.applicant = response;
        this._applicant.next(Object.assign({}, this.dataRepo).applicant);

      });
  }

}
