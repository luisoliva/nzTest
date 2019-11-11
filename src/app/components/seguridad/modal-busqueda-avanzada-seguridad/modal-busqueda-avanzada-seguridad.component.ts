import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'modal-busqueda-avanzada-seguridad',
  templateUrl: './modal-busqueda-avanzada-seguridad.component.html',
  styleUrls: ['./modal-busqueda-avanzada-seguridad.component.css']
})
export class ModalBusquedaAvanzadaSeguridadComponent implements OnInit, OnChanges {
  @Input() lVisible = false;

  constructor() { }

  ngOnInit() {
    console.log("he sido apretado");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("ahora si he sido apretadoo");
  }
  handleCancel() {
    this.lVisible = false;
  }

}
