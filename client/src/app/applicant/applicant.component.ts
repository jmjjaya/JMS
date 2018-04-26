import { JobPosition } from './../shared/models/jobPosition';
import { AppComponent } from './../app.component';
import { Applicant } from './../shared/models/applicant';
import { Component, OnInit, ViewChild, ViewContainerRef, AfterContentInit, ComponentRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ApplicantInfoComponent } from './applicant-info/applicant-info.component';
import { PositionComponent } from './position/position.component';
import { AppliedPost } from '../shared/models/appliedpost';

@Component({
  selector: 'jmsapp-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  applicant: Applicant;
  positions: JobPosition[];
  constructor(private _dataService: DataService, public cdRef: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.applicant = new Applicant();
    this.positions = [];
    console.log('test');
  }

  ngAfterViewInit() {
    this._dataService.applicant.subscribe((res: AppliedPost) => {
      console.log(res)
      this.applicant = res.applicant;
      this.positions = res.appliedpost;
      console.log(this.applicant);
      this.cdRef.detectChanges();
    });
  }
}
