import { Component, OnInit, ViewChild , Input} from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'jmsapp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  jobs = JOBS;

  @ViewChild('myTable') table: any;
  @Input('searchTerm') searchTerm: string;

  rows: any[] = [];
  expanded: any = {};
  timeout: any;

  constructor() {
    // this.fetch((data) => {
    //   this.rows = data;
    // });
    this.rows = this.jobs;
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
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

export interface JobPosition {
  id: number;
  title: string;
  company: String;
  tags: String;
}

const JOBS: JobPosition[] = [{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },{ id: 1, title: "Data Engineering", company: "Citadel", tags: "Python R" },
{ id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" }
];

