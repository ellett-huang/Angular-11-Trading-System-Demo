import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { OrderEditorComponent } from './order-editor.component';
import { OrdersResolver } from './orders-resolver.service';
import { SharedModule } from '../shared';
import { NotAvailablePipe} from './notavailable.pipe';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OrdersRoutingModule
  ],
  declarations: [
    OrdersComponent,
    OrderEditorComponent,
    NotAvailablePipe
  ],
  providers: [
    OrdersResolver
  ]
})
export class ordersModule {}
