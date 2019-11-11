import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClonarSeguridadComponent } from './modal-clonar-seguridad.component';

describe('ModalClonarSeguridadComponent', () => {
  let component: ModalClonarSeguridadComponent;
  let fixture: ComponentFixture<ModalClonarSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalClonarSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClonarSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
