import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule, NZ_I18N, es_ES, NzGridModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
// Componentes EgobX
import { VistaGeneralComponent } from './pages/vista-general/vista-general.component';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import { SeguridadTablaComponent } from './components/seguridad/seguridad-tabla/seguridad-tabla.component';
import { SeguridadService } from './services/seguridad/seguridad.service';
import { ModalCrearUsuarioSeguridadComponent } from './components/seguridad/modal-crear-usuario-seguridad/modal-crear-usuario-seguridad.component';
import { ModalBusquedaAvanzadaSeguridadComponent } from './components/seguridad/modal-busqueda-avanzada-seguridad/modal-busqueda-avanzada-seguridad.component';
import { ModalClonarSeguridadComponent } from './components/seguridad/modal-clonar-seguridad/modal-clonar-seguridad.component';
// import { TOKEN_IREADER_REPO } from 'src/core/IReaderRepo.repository';
import { UserReaderRepo } from 'src/core/ReaderRepo.repository';
import { InformacionCuentaComponent } from './components/Shared/informacion-cuenta/informacion-cuenta.component';
import { RowComponent } from './components/Shared/row/row.component';
import { CheckEstatusComponent } from './components/Shared/check-estatus/check-estatus.component';
import { TestUserLogsComponent } from './components/Temp/test-user-logs/test-user-logs.component';
import {LogsListComponent} from './components/Temp/test-user-logs/logs-list/logs-list.component';
import {LogsViewerComponent} from './components/Temp/test-user-logs/logs-viewer/logs-viewer.component';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    VistaGeneralComponent,
    AppNavigationComponent,
    SeguridadTablaComponent,
    ModalCrearUsuarioSeguridadComponent,
    ModalBusquedaAvanzadaSeguridadComponent,
    ModalClonarSeguridadComponent,
    InformacionCuentaComponent,
    RowComponent,
    CheckEstatusComponent,
    TestUserLogsComponent,
    LogsListComponent,
    LogsViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES },
    SeguridadService],
    bootstrap: [AppComponent]
  })
  // export let InjectorInstance: Injector;
export class AppModule {
    constructor() {
      // InjectorInstance = this.injector;
    }
   }
