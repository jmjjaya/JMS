import { Applicant } from './../../shared/models/applicant';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'jmsapp-applicant-info',
  templateUrl: './applicant-info.component.html',
  styleUrls: ['./applicant-info.component.css']
})
export class ApplicantInfoComponent implements OnInit {
  @Input() applicant: Applicant;
  constructor() { }

  ngOnInit() {
   
  }

}
