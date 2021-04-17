import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Order, OrderListConfig } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class OrdersService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: OrderListConfig): Observable<{orders: Order[], ordersCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get(
      '/orders' + '/search',
      new HttpParams({ fromObject: params })
    );
  }

  getAllOrders(username): Observable<Order[]> {
    return this.apiService.get('/OrdersList/' + username)
      .pipe(map(data => data.order));
  }

  get(id): Observable<Order> {
    return this.apiService.get('/orders/' + id)
      .pipe(map(data => data.order));
  }

  delete(id) {
    return this.apiService.delete('/orders/' + id);
  }

  save(order: Order): Observable<Order> {
    // Update or create new order 
    return this.apiService.put('/orders/', order)
        .pipe(map(data => data.article));
  }

}
