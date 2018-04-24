import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplicantInfoComponent } from './update-applicant-info.component';

describe('UpdateApplicantInfoComponent', () => {
  let component: UpdateApplicantInfoComponent;
  let fixture: ComponentFixture<UpdateApplicantInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateApplicantInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApplicantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
