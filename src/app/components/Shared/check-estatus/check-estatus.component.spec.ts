import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEstatusComponent } from './check-estatus.component';

describe('CheckEstatusComponent', () => {
  let component: CheckEstatusComponent;
  let fixture: ComponentFixture<CheckEstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckEstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckEstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
