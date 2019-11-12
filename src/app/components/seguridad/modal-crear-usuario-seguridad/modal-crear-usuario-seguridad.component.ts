import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-crear-usuario-seguridad',
  templateUrl: './modal-crear-usuario-seguridad.component.html',
  styleUrls: ['./modal-crear-usuario-seguridad.component.css']
})
export class ModalCrearUsuarioSeguridadComponent implements OnInit {
  @Input() lVisible = false;

  @Output() cerrarModal = new EventEmitter<string>();

  lstUsuario:any[] = [];

  lActivo:boolean = true;
  
  constructor() { }

  ngOnInit() {
    console.log("afdfdsfdfsd");
  }

  handleCancel() {
    this.lVisible = false;
    this.cerrarModal.emit('crear-usuario');
  }
  
  prueba($event){
    this.lActivo=true;
    console.log(`resultado: ${$event}`)
  }

  validarformulario($event){
    console.log($event)
   // this.lActivo = $event;
  }
}
