import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Account } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountsService {
  constructor (
    private apiService: ApiService
  ) {}

  get(username: string): Observable<Account[]> {
    return this.apiService.get('/AccountsList/' + username)
      .pipe(map((data: {account: Account[]}) => data.account));
  }

  update(username: string, account: Account): Observable<Account> {
    return this.apiService.put('/accounts/' + username, account);
  }

  addNew(username: string, account: Account): Observable<Account> {
    return this.apiService.post('/accounts/' + username, account );
  }

  delete(username: string, accountID: number): Observable<Account> {
    return this.apiService.delete(`/accounts/${username}/${accountID}` );
  }

}
