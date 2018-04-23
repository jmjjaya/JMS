import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedPostComponent } from './applied-post.component';

describe('AppliedPostComponent', () => {
  let component: AppliedPostComponent;
  let fixture: ComponentFixture<AppliedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
