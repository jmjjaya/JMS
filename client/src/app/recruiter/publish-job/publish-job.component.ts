import { Component, OnInit, Input } from '@angular/core';
import { RecruiterService } from '../recruiter-services/recruiter.service';
import { Observable} from 'rxjs/Observable';
@Component({
  selector: 'jmsapp-publish-job',
  templateUrl: './publish-job.component.html',
  styleUrls: ['./publish-job.component.css']
})
export class PublishJobComponent implements OnInit {
  @Input() title;
  @Input() description;
  @Input() tags;
  constructor(private recruiterService: RecruiterService) { }

  ngOnInit() {
  }

  createNewJob(){
    let newJob ={
      title: this.title,
      description: this.description,
      tags: this.tags,
      status:'Open',
      postDate: new Date()
    };
    this.recruiterService.createNewJob(newJob).subscribe(
      result=>{
        console.log("A new Job is created successfully...");
        return true;
      },
      err =>{
        console.log("Job Creation Failed...");
        return Observable.throw(err);
      }
    );
  }
  
  onSubmit(){
    this.createNewJob();
  }
}
