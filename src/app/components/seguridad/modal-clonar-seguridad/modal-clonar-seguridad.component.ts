import {Component, Input, OnInit} from '@angular/core';
import {RolModel} from '../../../../models/Rol.model';
import {UserModel} from '../../../../models/User.model';

@Component({
  selector: 'modal-clonar-seguridad',
  templateUrl: './modal-clonar-seguridad.component.html',
  styleUrls: ['./modal-clonar-seguridad.component.css']
})
export class ModalClonarSeguridadComponent implements OnInit {
  @Input() lVisible = false;
  roles: Array<RolModel>;
  rolesAllSelected: boolean = false;
  currentTab: number = 0;
  selectableUsers: Array<UserModel>;
  selectedUsers: Array<UserModel>;

  constructor() {
    this.roles = new Array<RolModel>();
    this.selectableUsers = new Array<UserModel>();
    this.selectedUsers = new Array<UserModel>();
  }

  ngOnInit() {
    for (var i=0;i<5;i++){
      this.roles.push(new RolModel());
    }

    this.selectableUsers.push(new UserModel("Luis", "Simple rectangular container"));
    this.selectableUsers.push(new UserModel("Alberto", "Simple rectangular container"));
    this.selectableUsers.push(new UserModel("Oliva", "Simple rectangular container"));
    this.selectableUsers.push(new UserModel("Medina", "Simple rectangular container"));
  }

  handleCancel() {
    this.lVisible = false;
  }

  selectRole(rol: RolModel) {
    let index = this.roles.indexOf(rol);
    this.roles[index].checked = !this.roles[index].checked;
    console.log('rol' + index + this.roles[index].checked);
    this.didAllRolesSelected();
  }

  selectAllRoles() {
    this.rolesAllSelected = !this.rolesAllSelected;
    if (this.rolesAllSelected){
      this.roles.forEach(function(element) {
        element.checked = true;
      });
      console.log('roles ' + this.rolesAllSelected);
    }else{
      this.roles.forEach(function(element) {
        element.checked = false;
      });
      console.log('roles ' + this.rolesAllSelected);

    }
  }

  didAllRolesSelected(){
    for (var i=0;i<this.roles.length;i++){
      if (!this.roles[i].checked){
        this.rolesAllSelected = false;
        break;
      }
    }
  }

  hideBackButton():boolean{
    return this.currentTab == 0;
  }

  hideNextButton():boolean{
    return this.currentTab == 1;
  }

  didSelectedRol(): boolean{
    for (var i=0;i<this.roles.length;i++){
      if (this.roles[i].checked){
        return true;
      }
    }
  }

  didUserSelected(): boolean{
    if (this.selectedUsers.length>0){
      return true;
    }
  }

  selectUser(user: UserModel) {
    this.selectedUsers.push(user);
    let index = this.selectableUsers.indexOf(user);
    this.selectableUsers.splice(index,1);
  }

  unselectUser(user: UserModel) {
    this.selectableUsers.push(user);
    let index = this.selectedUsers.indexOf(user);
    this.selectedUsers.splice(index,1);
  }

  canSave() {
    if (this.didSelectedRol() && this.didUserSelected()){
      return true;
    }
  }
}
