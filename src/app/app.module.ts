import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule, NZ_I18N, es_ES, NzGridModule} from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
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

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    VistaGeneralComponent,
    AppNavigationComponent,
    SeguridadTablaComponent,
    ModalCrearUsuarioSeguridadComponent,
    ModalBusquedaAvanzadaSeguridadComponent,
    ModalClonarSeguridadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES },
  SeguridadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
