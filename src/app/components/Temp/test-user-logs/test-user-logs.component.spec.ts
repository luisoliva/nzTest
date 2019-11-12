import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserLogsComponent } from './test-user-logs.component';

describe('TestUserLogsComponent', () => {
  let component: TestUserLogsComponent;
  let fixture: ComponentFixture<TestUserLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUserLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUserLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
