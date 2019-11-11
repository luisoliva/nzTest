import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-crear-usuario-seguridad',
  templateUrl: './modal-crear-usuario-seguridad.component.html',
  styleUrls: ['./modal-crear-usuario-seguridad.component.css']
})
export class ModalCrearUsuarioSeguridadComponent implements OnInit {
  @Input() lVisible = false;

  @Output() cerrarModal = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log("afdfdsfdfsd");
  }

  handleCancel() {
    this.lVisible = false;
    this.cerrarModal.emit('crear-usuario');
  }
}
