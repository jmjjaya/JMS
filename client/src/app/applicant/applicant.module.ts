import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantComponent } from './applicant.component';
import { ApplicantInfoComponent } from './applicant-info/applicant-info.component';
import { AppliedPostComponent } from './applied-post/applied-post.component';
import { PositionComponent } from './position/position.component';
import { PostItemComponent } from './position/post-item/post-item.component';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot()
  ],
  declarations: [ApplicantComponent, ApplicantInfoComponent, AppliedPostComponent, PositionComponent, PostItemComponent],
  exports:[ApplicantComponent],
  entryComponents:[PostItemComponent, PositionComponent]
})
export class ApplicantModule { }
