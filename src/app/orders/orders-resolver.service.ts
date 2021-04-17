import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { OrdersService } from '../core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class OrdersResolver implements Resolve<Account> {
  constructor(
    private ordersService: OrdersService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {

    return this.ordersService.get(route.params['username'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));

  }
}
