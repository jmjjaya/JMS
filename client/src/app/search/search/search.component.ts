import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jmsapp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  jobs = JOBS;

  constructor() { }

  ngOnInit() {
  }

  expandJob(event) {
    // console.log(this.jobsTr);
    let job_id = event.currentTarget.id;
    let job_detail_element = event.srcElement.parentElement.nextElementSibling;
    job_detail_element.style.display = job_detail_element.style.display == 'block' ? 'none' : 'block';

    console.log(job_detail_element);
    console.log(job_detail_element.style.display);
  }

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
  { id: 2, title: "Data Scientist", company: "BOA", tags: "Matlab Hadoop" },
  ];

