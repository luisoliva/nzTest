import { IReaderRepo } from './IReaderRepo.repository';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEntityFilter } from './IEntityFilter.filter';
import { Inject, Injectable } from '@angular/core';
import { UserModel } from 'src/models/User.model';
// import { InjectorInstance } from 'src/app/app.module';

export class UserReaderRepo implements IReaderRepo {


    public Get(url: string) {
       return "hola es la prueba ";
    }

    // public GetByParams(iEntity: IEntityFilter<UserModel>, entity: UserModel, url: string): Observable<UserModel> {
    //     return this.http.get<UserModel>(url + iEntity.createQueryParams(entity));
    // }


}
