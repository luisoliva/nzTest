import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBusquedaAvanzadaSeguridadComponent } from './modal-busqueda-avanzada-seguridad.component';

describe('ModalBusquedaAvanzadaSeguridadComponent', () => {
  let component: ModalBusquedaAvanzadaSeguridadComponent;
  let fixture: ComponentFixture<ModalBusquedaAvanzadaSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBusquedaAvanzadaSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBusquedaAvanzadaSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
