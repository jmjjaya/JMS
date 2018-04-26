import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ApplicantModule } from './applicant/applicant.module';
import { DataService } from './core/services/data.service';
import { RecruiterModule } from './recruiter/recruiter.module';
import { SearchModule } from './search/search.module';

import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { SearchComponent } from './search/search/search.component';

import { UpdateRecruiterComponent } from './recruiter/update-recruiter/update-recruiter.component';
import { RecruiterMainComponent } from './recruiter/recruiter-main/recruiter-main-component/recruiter-main.component';

import { ApplicantComponent } from './applicant/applicant.component';

import { PageNotFoundComponent } from './not-found.component';

import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

const MY_ROUTES = [
  {
    path: '',
    redirectTo: 'jms',
    pathMatch: 'full'
  },
  {
    path: 'jms',
    component: SearchBarComponent,
    data: { title: 'search jobs' },
    children: [
      {
        path: 'search',
        component: SearchComponent,
        data: { title: 'results' }
      },
      {
        path: 'applicant',
        component: ApplicantComponent,
        canActivate: [AuthGuard],
        data: { title: 'applicant' }
      }
    ]
  },
  {
    path: 'jms/recruiter',
    component: RecruiterMainComponent,
    canActivate: [AuthGuard],
    data: { title: 'recruiter home' }
  },
  {
    path: 'recruiter/profile',
    component: UpdateRecruiterComponent,
    canActivate: [AuthGuard],
    data: { title: 'Update Profile' }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ApplicantModule,
    RecruiterModule,
    SearchModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [DataService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
