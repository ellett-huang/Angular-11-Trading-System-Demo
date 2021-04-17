import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Account, AccountsService, UserService } from '../core';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html'
})
export class AccountEditorComponent implements OnInit {
  account: Account;
  AccountsForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private userService: UserService,
    private accountsService: AccountsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // create form group using the form builder
    this.AccountsForm = this.fb.group({
      id: 0,
      username: this.userService.getCurrentUser().username,
      accountName: '',
      description: ''
    });
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {account: Account}) => {
        this.account = data.account;
      }
    );
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateAccount(this.AccountsForm.value);

    this.accountsService
    .update(this.account.username, this.account)
    .subscribe(
      (updatedAccount: Account) => this.router.navigateByUrl('/accounts/' + updatedAccount.username),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateAccount(values: Object) {
    Object.assign(this.account, values);
  }

}
