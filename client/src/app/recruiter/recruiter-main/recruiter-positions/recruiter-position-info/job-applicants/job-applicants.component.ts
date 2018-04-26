import { Component, OnInit } from '@angular/core';
import {Applicant} from '../../../../../shared/models/applicant';
import { Address } from '../../../../../shared/models/address';

@Component({
  selector: 'jmsapp-job-applicants',
  templateUrl: './job-applicants.component.html',
  styleUrls: ['./job-applicants.component.css']
})
export class JobApplicantsComponent implements OnInit {
  jobApplicants: Applicant[]=[
    {
      applicant_id: "1",
      name:"Josh",
    gender:"M",
    dob:new Date(),
    address: new Address(),
    phone: "9841026252",
    email: "josh@mum.edu",
    liURL: "www.mylink.com"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
