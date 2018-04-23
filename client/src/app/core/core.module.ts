import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './navigation/auth/auth.component';
import { BreadcumbComponent } from './navigation/breadcumb/breadcumb.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ApplicantModule } from '../applicant/applicant.module';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ApplicantModule,
    ModalModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    AuthComponent,
    BreadcumbComponent,
    NavigationComponent
  ],
  exports: [
    AuthComponent,
    BreadcumbComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
