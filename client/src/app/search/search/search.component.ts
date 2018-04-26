import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../core/services/data.service';
import { JobPosition } from '../../shared/models/jobPosition';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'jmsapp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild('myTable') table: any;

  expanded: any = {};
  timeout: any;

  jobs: any[] = [];
  loading: boolean;
  isApply: boolean;
  constructor(private _dataService: DataService, private _authService: AuthService, private _router: Router) {
    // this._dataService.getJobPosition();
    this._dataService.jobPosResault.subscribe((response: JobPosition[]) => {
      this.jobs = response;
    });

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


