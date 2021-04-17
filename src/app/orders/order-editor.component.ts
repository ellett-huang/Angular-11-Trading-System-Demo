import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Order, OrdersService } from '../core';

@Component({
  selector: 'app-order-editor',
  templateUrl: './order-editor.component.html'
})
export class OrderEditorComponent implements OnInit {
  order: Order;
  OrdersForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(       
    private ordersService: OrdersService,
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // create form group using the form builder
    this.OrdersForm = this.fb.group({
      id: 0,
      accountID: 0,
      symbol: '',
      price: 0,
      orderType: '',
      orderAction: '',
      orderSize: 0,
      value: 0,      
      tradingDate: new Date()
    });
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {order: Order}) => {
        this.order = data.order;
      }
    );
  }

  submitForm() {
    // update the model    
    this.updateOrder(this.OrdersForm.value);
    this.order.value = this.order.price * this.order.orderSize;
    this.datePipe.transform(this.order.tradingDate, 'yyyy-MM-dd');
      
    this.ordersService.save(this.order).subscribe(
      () => {
        if(confirm("Order has been placed! "))        
          this.isSubmitting = true;
          this.router.navigate(['orders'], { relativeTo: this.route.parent });
      },
      err => {
          this.errors = err;
          this.isSubmitting = false;
      }
    );   

  }

  cancel(){
    this.order.symbol = '';
    this.order.price = 0;
    this.order.orderType = '';
    this.order.orderAction = '';
    this.order.orderSize = 0;
    this.order.value = 0;
  }

  updateOrder(values: Object) {
    Object.assign(this.order, values);
  }

}
