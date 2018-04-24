import { Component, OnInit,Input } from '@angular/core';
import { JobPosition } from '../../../../../shared/models/jobPosition';

@Component({
  selector: 'jmsapp-recruiter-position-info',
  templateUrl: './recruiter-position-info.component.html',
  styleUrls: ['./recruiter-position-info.component.css']
})
export class RecruiterPositionInfoComponent implements OnInit {
  @Input() aPos: JobPosition;
  constructor() { 
  }

  readPostion(){
    console.log(this.aPos);
  }
  ngOnInit() {
    this.readPostion();
  }

}
