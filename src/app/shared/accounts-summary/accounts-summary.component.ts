import { Component, OnInit } from '@angular/core';
import { Account } from '../../core';
import { OrdersService, AccountsService, UserService, User, Order } from '../../core';

@Component({
  selector: 'app-accounts-summary',
  styleUrls: ['accounts-summary.component.css'],
  templateUrl: './accounts-summary.component.html'
})
export class AccountSummaryComponent implements OnInit {
  constructor (
    private ordersService: OrdersService,
    private accountsService: AccountsService,
    private userService: UserService,
    private user: User

  ) {}

  userName: string = '';
  emailAddress: string = '';
  totalAccountNumber = 0;
  totalAssetsValue: number = 0;
  totalPositions: number = 0;
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];
    
  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.userName = this.user.username;
    this.emailAddress = this.user.email;
    this.accountsService.get(this.userName).subscribe(
      (accounts: Account[]) => this.totalAccountNumber = accounts.length
    );
    this.ordersService.getAllOrders(this.userName).subscribe(
      (orders: Order[]) => {
        orders.forEach(a => {
          this.totalAssetsValue +=a.value;
          if(a.orderType.toLocaleLowerCase().includes('buy'))
            this.totalPositions +=a.orderSize;
          else
            this.totalPositions -=a.orderSize;
        });  
        this.loading = true;      
      }
    )
  }
   
}
