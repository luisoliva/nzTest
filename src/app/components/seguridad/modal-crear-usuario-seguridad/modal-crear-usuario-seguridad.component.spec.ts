import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearUsuarioSeguridadComponent } from './modal-crear-usuario-seguridad.component';

describe('ModalCrearUsuarioSeguridadComponent', () => {
  let component: ModalCrearUsuarioSeguridadComponent;
  let fixture: ComponentFixture<ModalCrearUsuarioSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearUsuarioSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearUsuarioSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
