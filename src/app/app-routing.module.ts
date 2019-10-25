import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VistaGeneralComponent} from './vista-general/vista-general.component';


const routes: Routes = [
  {
    path: "vistaGeneral",
    component: VistaGeneralComponent
  },
  {
    path: "**",
    redirectTo: "vistaGeneral"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
