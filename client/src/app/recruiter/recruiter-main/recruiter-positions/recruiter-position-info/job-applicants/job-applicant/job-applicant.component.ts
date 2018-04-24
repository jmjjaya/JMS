import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../../../../../../shared/models/applicant';

@Component({
  selector: 'jmsapp-job-applicant',
  templateUrl: './job-applicant.component.html'
})
export class JobApplicantComponent implements OnInit {
  @Input() anApplicant: Applicant;
  constructor() {
    this.anApplicant = new Applicant();
   }

  ngOnInit() {
  }

}
