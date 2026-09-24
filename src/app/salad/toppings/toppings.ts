import { Component, input, output } from '@angular/core';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-toppings',
  standalone: false,
  styleUrl: './toppings.scss',
  templateUrl: './toppings.html',
})
export class Toppings {
  public toppings = input<Topping[]>([])
  public buttonLabel = input<string>('')
  public chooseTopping = output<Topping>();
}
