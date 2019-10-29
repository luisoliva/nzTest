import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'modal-busqueda-avanzada-seguridad',
  templateUrl: './modal-busqueda-avanzada-seguridad.component.html',
  styleUrls: ['./modal-busqueda-avanzada-seguridad.component.css']
})
export class ModalBusquedaAvanzadaSeguridadComponent implements OnInit {
  @Input() lVisible = false;

  constructor() { }

  ngOnInit() {
  }

  handleCancel() {
    this.lVisible = false;
  }

}
