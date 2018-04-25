import { Component, OnInit } from '@angular/core';
import { Recruiter } from '../../recruiter';
import { Address } from '../../../shared/models/address';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'jmsapp-recruiter-info',
  templateUrl: './recruiter-info.component.html',
  styleUrls: ['./recruiter-info.component.css']
})
export class RecruiterInfoComponent implements OnInit {
  recruiter: Recruiter;
  constructor(private dataService: DataService) {
  }

  getRecruiterInfo() {
    this.dataService.getRecruiter().subscribe(
      result => {
        this.recruiter = <Recruiter>result;
        console.log(this.recruiter);
        return true;
      },
      err => {
        console.log("Recruiter Information is not fetched...");
      }
    );
  }

  getRecruiterByName(name) {
    console.log("Get Recruiter Info By Name");
    this.dataService.getRecruiterByName(name);
  }
  
  ngOnInit() {
    this.getRecruiterByName("Rupendra");
  }
}
