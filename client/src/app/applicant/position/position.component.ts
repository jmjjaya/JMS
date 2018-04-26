import { JobPosition } from './../../shared/models/jobPosition';
import { PostItemComponent } from './post-item/post-item.component';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, ComponentRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { Applicant } from '../../shared/models/applicant';
import { forEach } from '@angular/router/src/utils/collection';
import { DataService } from '../../core/services/data.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'jmsapp-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent {
  // @ViewChild('positionItems', { read: ViewContainerRef }) positionItemRef: ViewContainerRef;
  @Input() positions: JobPosition[];

  @ViewChild('myTable') table: any;
  expanded: any = {};
  timeout: any;

  // jobs: any[] = [];
  loading: boolean;
  isApply: boolean;
  constructor(private _dataService: DataService,
    private _authService: AuthService, private _router: Router) {
    // this._dataService.getJobPosition();
    // this._dataService.jobPosResault.subscribe((response: JobPosition[]) => {
    //   this.jobs = response;
    // });

    this.isApply = this._authService.isAuthenticated();
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  applyJob(event) {
    alert("Go to Register or User profile page.");

  }

}
