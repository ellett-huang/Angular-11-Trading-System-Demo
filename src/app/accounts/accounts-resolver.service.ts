import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Account, AccountsService } from '../core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AccountsResolver implements Resolve<Account> {
  constructor(
    private accountsService: AccountsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.accountsService.get(route.params['username'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));

  }
}
