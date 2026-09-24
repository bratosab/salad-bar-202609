import { Component, input, output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-toppings',
  styleUrl: './toppings.scss',
  templateUrl: './toppings.html',
  imports: [MatButton],
})
export class Toppings {
  public toppings = input<Topping[]>([]);
  public buttonLabel = input<string>('');
  public chooseTopping = output<Topping>();
}
