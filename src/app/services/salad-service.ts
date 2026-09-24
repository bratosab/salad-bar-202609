import { computed, Service, Signal, signal } from '@angular/core';
import { Topping } from '../models/topping.model';

@Service()
export class SaladService {
  private chosenToppingList = signal<Topping[]>([]);

  get chosenTopping() {
    return this.chosenToppingList.asReadonly();
  }

  totalPrice: Signal<number> = computed(() => {
    let total = 0
    this.chosenToppingList().forEach(t => total = total + t.price)
    return total
  })

  chooseTopping(topping: Topping) {
    this.chosenToppingList.update((toppings) => [...toppings, topping]);
  }

  removeTopping(id: number) {
    this.chosenToppingList.update((toppings) => toppings.filter((t) => t.id !== id));
  }
}
