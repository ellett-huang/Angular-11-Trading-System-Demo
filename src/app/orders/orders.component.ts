import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User, UserService, Order, OrdersService } from '../core';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private ordersSerive: OrdersService
  ) { }

  orders: Order[];
  currentUser: User;
  columnDefs: [{headerName: 'ID', 
                field: 'id', 
                width: 30      
                },
                {headerName: 'Account Name', 
                field: 'accountname', 
                width: 70      
                },
                {headerName: 'Description', 
                field: 'description', 
                width: 200      
                }];

  ngOnInit() {

    this.ordersSerive.getAllOrders(this.userService.getCurrentUser().username).subscribe(
      (orders: Order[]) => this.orders = orders      
    );
  }

  onViewCellClicked(event: any){
    this.router.navigateByUrl('/orders-editor/', event.data);
  }

}
