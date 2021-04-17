import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User, UserService, Account, AccountsService } from '../core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private accountsSerive: AccountsService
  ) { }

  accounts: Account[];
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

    this.accountsSerive.get(this.userService.getCurrentUser().username).subscribe(
      (accounts: Account[]) => this.accounts = accounts      
    );
  }

  onViewCellClicked(event: any){
    this.router.navigateByUrl('/account-edit/', event.data);
  }

}
