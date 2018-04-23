import { Applicant } from './../../shared/models/applicant';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'jmsapp-applicant-info',
  templateUrl: './applicant-info.component.html',
  styleUrls: ['./applicant-info.component.css']
})
export class ApplicantInfoComponent implements OnInit {
  applicant: Applicant;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getApplilcantInfo();
    this._dataService.applilcant.subscribe(res => {
      console.log(res.address);
      this.applicant = res;
    });
  }

}
