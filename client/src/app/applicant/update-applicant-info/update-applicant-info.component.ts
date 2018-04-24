import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../../shared/models/address';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'jmsapp-update-applicant-info',
  templateUrl: './update-applicant-info.component.html',
  styleUrls: ['./update-applicant-info.component.css']
})
export class UpdateApplicantInfoComponent implements OnInit {
  @Input() name;
  @Input() dob;
  @Input() email;
  @Input() url;
  @Input() address: Address;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.address = new Address();
  }

  onSubmit(){

  }
}
