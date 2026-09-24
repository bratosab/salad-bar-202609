import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing-module';
import { Salad } from './salad';
import { Toppings } from './toppings/toppings';
import { SharedMaterialModule } from '../shared-material-module';

@NgModule({
  imports: [CommonModule, SaladRoutingModule, SharedMaterialModule, Salad, Toppings],
})
export class SaladModule {}
