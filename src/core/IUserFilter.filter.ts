import { UserModel } from 'src/models/User.model';
import {IEntityFilter} from 'src/core/IEntityFilter.filter';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class UserFilter implements IEntityFilter<UserModel> {

    createQueryParams(user: UserModel): string {
        const queryParams = Object.keys(user).map((key) => {
            return key + '=' + user[key];
        }).join('&');
        console.log(queryParams);
        return queryParams;
    }

}
