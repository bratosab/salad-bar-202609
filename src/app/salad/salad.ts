import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../services/order-service';
import { ToppingsService } from '../services/toppings-service';
import { Topping } from '../models/topping.model';
import { SaladService } from '../services/salad-service';
import { Toppings } from './toppings/toppings';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';

@Component({
  selector: 'app-salad',
  styleUrl: './salad.scss',
  templateUrl: './salad.html',
  imports: [Toppings],
})
export class Salad implements OnInit {
  public orderService = inject(OrderService);
  private toppingsService = inject(ToppingsService);
  public saladService = inject(SaladService);
  private store = inject(Store);

  public name = this.store.selectSignal<string>(state => state.app.name);

  //toppings: Topping[] = [];
  toppings = signal<Topping[]>([]);

  ngOnInit(): void {
    this.toppingsService.getToppings().subscribe((toppings) => {
      this.toppings.set(toppings);
    });
  }
}
