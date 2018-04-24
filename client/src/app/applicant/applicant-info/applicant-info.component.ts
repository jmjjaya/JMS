import { Applicant } from './../../shared/models/applicant';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UpdateApplicantInfoComponent } from '../update-applicant-info/update-applicant-info.component';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'jmsapp-applicant-info',
  templateUrl: './applicant-info.component.html',
  styleUrls: ['./applicant-info.component.css']
})
export class ApplicantInfoComponent implements OnInit {
  @Input() applicant: Applicant;
  bsModalRef: BsModalRef;
  constructor(private _modalService: BsModalService) { }

  ngOnInit() {

  }

  onUpdate() {
    const config = {
      ignoreBackdropClick : true,
      class: 'modal-dialog-centered'
    }
    this.bsModalRef = this._modalService.show(UpdateApplicantInfoComponent, config);
  }

}
