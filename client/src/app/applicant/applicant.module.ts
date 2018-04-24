import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantComponent } from './applicant.component';
import { ApplicantInfoComponent } from './applicant-info/applicant-info.component';
import { AppliedPostComponent } from './applied-post/applied-post.component';
import { PositionComponent } from './position/position.component';
import { PostItemComponent } from './position/post-item/post-item.component';
import { AccordionModule } from 'ngx-bootstrap';
import { UpdateApplicantInfoComponent } from './update-applicant-info/update-applicant-info.component';
import {AlertModule, ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [ApplicantComponent, ApplicantInfoComponent, AppliedPostComponent, PositionComponent, PostItemComponent, UpdateApplicantInfoComponent],
  exports:[ApplicantComponent],
  entryComponents:[UpdateApplicantInfoComponent]
})
export class ApplicantModule { }
