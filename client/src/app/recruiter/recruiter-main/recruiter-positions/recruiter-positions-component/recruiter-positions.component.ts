import { Component, OnInit } from '@angular/core';
import { JobPosition } from '../../../../shared/models/jobPosition';
import { RecruiterService } from '../../../recruiter-services/recruiter.service';
import { Recruiter } from '../../../recruiter';


@Component({
  selector: 'jmsapp-recruiter-positions',
  templateUrl: './recruiter-positions.component.html',
  styleUrls: ['./recruiter-positions.component.css']
})
export class RecruiterPositionsComponent implements OnInit {

  public isCollapsed: false;
  public jobPositions: JobPosition[];
  public recruiter:Recruiter;
  constructor(private recruiterService: RecruiterService) { 
  }

  getRecruitersInfo(){
    this.recruiterService.getRecruiter().subscribe(
      result =>{
        this.recruiter=<Recruiter>result;
        this.jobPositions = <JobPosition[]>this.recruiter.positions;
        return true;
      }
    );
  }
  ngOnInit() {
    this.getRecruitersInfo();
  }

}
