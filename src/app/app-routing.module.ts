import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Routes
import {VistaGeneralComponent} from './pages/vista-general/vista-general.component';
import {TestUserLogsComponent} from './components/Temp/test-user-logs/test-user-logs.component';


const routes: Routes = [
  {
    path: 'home',
    component: VistaGeneralComponent
  },
  {
    path: 'testUserLogs',
    component: TestUserLogsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
