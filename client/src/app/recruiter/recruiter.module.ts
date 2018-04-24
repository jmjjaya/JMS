import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecruiterInfoComponent } from './recruiter-main/recruiter-info/recruiter-info.component';
import { RecruiterMainComponent } from './recruiter-main/recruiter-main.component';
import { RecruiterPositionsComponent } from './recruiter-main/recruiter-positions/recruiter-positions.component';
import { JobPostDescriptionComponent } from './recruiter-main/recruiter-positions/recruiter-position-info/job-post-description/job-post-description.component';
import { RecruiterPositionInfoComponent } from './recruiter-main/recruiter-positions/recruiter-position-info/recruiter-position-info.component';
import { JobApplicantsComponent } from './recruiter-main/recruiter-positions/recruiter-position-info/job-applicants/job-applicants.component';
import { JobApplicantComponent } from './recruiter-main/recruiter-positions/recruiter-position-info/job-applicants/job-applicant/job-applicant.component';
import { PublishJobComponent } from './publish-job/publish-job.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [RecruiterMainComponent, PublishJobComponent],
  declarations: [RecruiterInfoComponent, 
    RecruiterMainComponent, 
    RecruiterPositionsComponent, 
    JobPostDescriptionComponent, 
    RecruiterPositionInfoComponent, 
    JobApplicantsComponent, 
    JobApplicantComponent, 
    PublishJobComponent]
})
export class RecruiterModule { }
