import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './navigation/auth/auth.component';
import { BreadcumbComponent } from './navigation/breadcumb/breadcumb.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
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
