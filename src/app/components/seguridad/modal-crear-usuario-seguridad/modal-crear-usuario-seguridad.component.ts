import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'modal-crear-usuario-seguridad',
  templateUrl: './modal-crear-usuario-seguridad.component.html',
  styleUrls: ['./modal-crear-usuario-seguridad.component.css']
})
export class ModalCrearUsuarioSeguridadComponent implements OnInit {
  @Input() lVisible = false;

  constructor() { }

  ngOnInit() {
  }

  handleCancel() {
    this.lVisible = false;
  }



}
