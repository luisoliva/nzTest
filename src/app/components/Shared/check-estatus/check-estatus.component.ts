import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check-estatus',
  templateUrl: './check-estatus.component.html',
  styleUrls: ['./check-estatus.component.css']
})
export class CheckEstatusComponent implements OnInit {

  @Input() idUsuario:number;
  @Output() ChangeStatus = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log(this.idUsuario)
  }

  onChangeStatus(){
    console.log("ojiode")
    this.ChangeStatus.emit(this.idUsuario);
  }

}
