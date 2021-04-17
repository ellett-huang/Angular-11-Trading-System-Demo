import { ModuleWithProviders, NgModule } from '@angular/core';

import { OrdersComponent } from '../orders/orders.component';
import { AccountsComponent } from './accounts.component';
import { AccountEditorComponent } from './account-editor.component';
import { AccountsResolver } from './accounts-resolver.service';
import { SharedModule } from '../shared';
import { AccountsRoutingModule } from './accounts-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AccountsRoutingModule
  ],
  declarations: [
    OrdersComponent,
    AccountsComponent,
    AccountEditorComponent
  ],
  providers: [
    AccountsResolver
  ]
})
export class AccountsModule {}
