import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './navigation/auth/auth.component';
import { BreadcumbComponent } from './navigation/breadcumb/breadcumb.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  imports: [
    CommonModule
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
