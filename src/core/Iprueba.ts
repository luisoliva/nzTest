import { InjectionToken } from '@angular/core';

export const PRUEBA_TOKEN = new InjectionToken<Iprueba>('prueba');
export interface Iprueba {
    obtener();
}
