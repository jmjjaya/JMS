import { DataService } from './../../services/data.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthModel } from './auth.model';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  model: AuthModel = new AuthModel();

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private _dataService: DataService) {}


  loginModal(loginModalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(loginModalTemplate);
  }

  registerModal(registerModalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(registerModalTemplate);
  }

  submitLogin(loginForm) {
    console.log(loginForm.value);
    this._dataService.getApplilcantInfo();
  }

  submitRegister(registerForm) {
    console.log(registerForm.value);
  }


  ngOnInit() {
  }

}
