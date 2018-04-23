import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecruiterInfoComponent } from './recruiter-info/recruiter-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[RouterModule, FormsModule],
  declarations: [RecruiterInfoComponent]
})
export class RecruiterModule { }
