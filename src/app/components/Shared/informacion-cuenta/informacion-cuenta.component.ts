import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { user } from './user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-informacion-cuenta',
  templateUrl: './informacion-cuenta.component.html',
  styleUrls: ['./informacion-cuenta.component.css']
})

export class InformacionCuentaComponent implements OnInit {

  // @Output() Information = new EventEmitter<user>();
  @Output() ValidacionInformacion = new EventEmitter<[user,boolean]>();

  validateForm: FormGroup;

  lstInformation:user = {
    Id:null,
    Nombre:null
  };

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.validateForm = this.fb.group({
      Nombres: [null, [Validators.email,Validators.required]]
    });
  }

  OnBlur(params: string){
    // console.log(this.validateForm.valid);
      if(this.validateForm.valid){
          this.ValidacionInformacion.emit([this.lstInformation, true]);
      }else{
          this.ValidacionInformacion.emit([this.lstInformation,false]);
      }
  }
}
