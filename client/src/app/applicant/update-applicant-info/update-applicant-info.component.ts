import { Applicant } from '../../shared/models/applicant';
import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../../shared/models/address';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'jmsapp-update-applicant-info',
  templateUrl: './update-applicant-info.component.html',
  styleUrls: ['./update-applicant-info.component.css']
})
export class UpdateApplicantInfoComponent implements OnInit {
  @Input() applicant: Applicant;
  constructor(public bsModalRef: BsModalRef, private _dataservice: DataService) { }

  ngOnInit() {
    this.applicant = new Applicant();
  }

  onSubmit() {
    console.log(this.applicant);
    this._dataservice.updateApplicantInfo(this.applicant).subscribe(responce =>
    {
      console.log(responce);
    });
  }
}
