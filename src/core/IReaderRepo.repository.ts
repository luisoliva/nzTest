import { Observable } from 'rxjs';
import { IEntityFilter } from './IEntityFilter.filter';
import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export const TOKEN_IREADER_REPO = new InjectionToken<IReaderRepo>('token');

export interface IReaderRepo {

      Get(url: string): string; // Observable<any>;
    // GetByParams(iEntityFilter: IEntityFilter<T> , entity: T , url: string ): Observable<T>;
}
