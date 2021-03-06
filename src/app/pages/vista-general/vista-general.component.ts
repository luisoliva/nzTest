import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrls: ['./vista-general.component.css']
})
export class VistaGeneralComponent implements OnInit {
  lModalCrearUsuario: boolean = false;
  lModalBusquedaAvanzada: boolean = false;
  lModalClonar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  _abrirModal(modal: string) {

    switch (modal) {
      case 'crear-usuario':
        this.lModalCrearUsuario = true;
        break;
      case 'busqueda-avanzada':
        this.lModalBusquedaAvanzada = true;
        break;
      case 'clonar':
        this.lModalClonar = true;
        break;
      default:
        console.log('no ha seleccionado algun modal');
        break;
    }
  }

  _cerrarModal($event) {
    console.log('cerrando modal' + $event);
    switch ($event) {
      case 'crear-usuario':
        this.lModalCrearUsuario = false;
        break;
      default:
        break;
    }

  } 

}
