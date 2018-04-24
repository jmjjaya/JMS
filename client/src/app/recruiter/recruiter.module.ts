import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecruiterInfoComponent } from './recruiter-main/recruiter-info/recruiter-info.component';
import { RecruiterMainComponent } from './recruiter-main/recruiter-main-component/recruiter-main.component';
import { RecruiterPositionsComponent } from './recruiter-main/recruiter-positions/recruiter-positions-component/recruiter-positions.component';
import { RecruiterPositionInfoComponent } from './recruiter-main/recruiter-positions/recruiter-position-info/recruiter-position-info-component/recruiter-position-info.component';
import { JobApplicantsComponent } from './recruiter-main/recruiter-positions/recruiter-position-info/job-applicants/job-applicants.component';
import { JobApplicantComponent } from './recruiter-main/recruiter-positions/recruiter-position-info/job-applicants/job-applicant/job-applicant.component';
import { PublishJobComponent } from './publish-job/publish-job.component';
import { RecruiterService } from './recruiter-services/recruiter.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [RecruiterMainComponent, PublishJobComponent],
  providers:[RecruiterService],
  declarations: [RecruiterInfoComponent, 
    RecruiterMainComponent, 
    RecruiterPositionsComponent, 
    RecruiterPositionInfoComponent, 
    JobApplicantsComponent, 
    JobApplicantComponent, 
    PublishJobComponent]
})
export class RecruiterModule { }
