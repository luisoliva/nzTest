import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrls: ['./vista-general.component.css']
})
export class VistaGeneralComponent implements OnInit {
  lModalCrearUsuario: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  _abrirModal(modal: string) {
    console.log('he sido apretado');
    switch (modal) {
      case 'crear-usuario':
        this.lModalCrearUsuario = true;
        break;
      default:
        console.log('no ha seleccionado algun modal');
        break;
    }
  }

}
