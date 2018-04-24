import { Component, OnInit } from '@angular/core';
import { Recruiter } from '../../recruiter';
import { Address } from '../../../shared/models/address';
import {RecruiterService} from '../../recruiter-services/recruiter.service';

@Component({
  selector: 'jmsapp-recruiter-info',
  templateUrl: './recruiter-info.component.html',
  styleUrls: ['./recruiter-info.component.css']
})
export class RecruiterInfoComponent implements OnInit {
  recruiter: Recruiter = new Recruiter();
  constructor(private recruiterService: RecruiterService) { }

  getRecruiterInfo(){
    this.recruiterService.getRecruiter().subscribe(
      result => {
        this.recruiter = <Recruiter>result;
        return true;
      },
      err => {
        console.log("Recruiter Information is not fetched...");
      }
    );
  }

  ngOnInit() {
    this.getRecruiterInfo();
  }

}
