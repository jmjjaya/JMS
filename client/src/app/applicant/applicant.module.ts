import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantComponent } from './applicant.component';
import { ApplicantInfoComponent } from './applicant-info/applicant-info.component';
import { AppliedPostComponent } from './applied-post/applied-post.component';
import { PositionComponent } from './position/position.component';
import { PostItemComponent } from './position/post-item/post-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ApplicantComponent, ApplicantInfoComponent, AppliedPostComponent, PositionComponent, PostItemComponent],
  exports:[ApplicantComponent]
})
export class ApplicantModule { }
