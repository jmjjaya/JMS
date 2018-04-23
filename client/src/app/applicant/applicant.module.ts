import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantComponent } from './applicant.component';
import { ApplicantInfoComponent } from './applicant-info/applicant-info.component';
import { AppliedPostComponent } from './applied-post/applied-post.component';
import { PositionComponent } from './position/position.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ApplicantComponent, ApplicantInfoComponent, AppliedPostComponent, PositionComponent]
})
export class ApplicantModule { }
