import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountEditorComponent } from './account-editor.component';
import { AccountsResolver } from './accounts-resolver.service';
import { AccountsComponent } from './accounts.component';


const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsComponent,
    resolve: {
      accounts: AccountsResolver
    },
    children: [
      {
        path: 'account-editor',
        component: AccountEditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {}
