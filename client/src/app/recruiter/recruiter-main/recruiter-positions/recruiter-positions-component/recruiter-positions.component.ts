import { Component, OnInit } from '@angular/core';
import { JobPosition } from '../../../../shared/models/jobPosition';

import { Recruiter } from '../../../recruiter';
import { DataService } from '../../../../core/services/data.service';


@Component({
  selector: 'jmsapp-recruiter-positions',
  templateUrl: './recruiter-positions.component.html',
  styleUrls: ['./recruiter-positions.component.css']
})
export class RecruiterPositionsComponent implements OnInit {

  public isCollapsed: false;
  public jobPositions: JobPosition[];
  public recruiter:Recruiter;
  constructor(private dataService: DataService) { 
  }

  getRecruitersInfo(){
    this.dataService.getRecruiter().subscribe(
      result =>{
        this.recruiter=<Recruiter>result;
        console.log(this.recruiter);
        return true;
      }
    );
  }
  ngOnInit() {
    // this.getRecruitersInfo();
  }

}
