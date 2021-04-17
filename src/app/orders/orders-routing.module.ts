import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderEditorComponent } from './order-editor.component';
import { OrdersResolver } from './orders-resolver.service';
import { OrdersComponent } from './orders.component';


const routes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent,
    resolve: {
      accounts: OrdersResolver
    },
    children: [
      {
        path: 'order-editor',
        component: OrderEditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
