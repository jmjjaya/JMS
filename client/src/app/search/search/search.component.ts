import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../core/services/data.service';
import { JobPosition } from '../../shared/models/jobPosition';


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
  constructor(private _dataService: DataService) {
    this._dataService.getJobPosition();
    this._dataService.jobPosition.subscribe((response: JobPosition[]) =>{
      console.log("jobs");
      this.jobs = response;
    });
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


  // expandJob(event) {
  //   // console.log(this.jobsTr);
  //   let job_id = event.currentTarget.id;
  //   let job_detail_element = event.srcElement.parentElement.nextElementSibling;
  //   job_detail_element.style.display = job_detail_element.style.display == 'block' ? 'none' : 'block';

  //   console.log(job_detail_element);
  //   console.log(job_detail_element.style.display);
  // }

  applyJob(event) {
    alert("Go to Register or User profile page.");
  }



}


