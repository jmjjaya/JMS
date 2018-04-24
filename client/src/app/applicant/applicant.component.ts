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
  }

  ngAfterViewInit() {
    this._dataService.applilcant.subscribe((res: AppliedPost) => {
      this.applicant = res.applicant;
      this.positions = res.appliedpost;
      this.cdRef.detectChanges();
    });
  }
}
