import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../services/order-service';

@Component({
  selector: 'app-order',
  standalone: false,
  styleUrl: './order.scss',
  templateUrl: './order.html',
})
export class Order {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private orderService = inject(OrderService);

  orderForm = this.fb.group({
    name: ['Mike', Validators.required],
    tel: ['0670707070', [Validators.required, Validators.pattern('0[6-7][0-9]{8}')]],
  });

  onSubmit() {
    if (this.orderForm.valid) {
      this.orderService.name.set(this.orderForm.controls.name.value ?? '');
      this.orderService.tel.set(this.orderForm.controls.tel.value ?? '');

      this.router.navigate(['salad']);
    }
  }
}
