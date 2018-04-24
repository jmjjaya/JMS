import { Component, OnInit } from '@angular/core';
import {Applicant} from '../../../../../shared/models/applicant';

@Component({
  selector: 'jmsapp-job-applicants',
  templateUrl: './job-applicants.component.html',
  styleUrls: ['./job-applicants.component.css']
})
export class JobApplicantsComponent implements OnInit {
  jobApplicants: Applicant[]=[
    {
      name:"Josh",
    gender:"M",
    dob:new Date(),
    address: "1000 N. 4th street",
    phone: "9841026252",
    email: "josh@mum.edu",
    liURL: "www.mylink.com"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
