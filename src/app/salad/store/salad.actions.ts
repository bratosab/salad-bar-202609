import { createAction, props } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

export const GetToppings = createAction('salad/GetToppings');
export const SaveToppings = createAction('salad/SaveToppings', props<{ list: Topping[] }>());
export const ChooseTopping = createAction('salad/ChooseTopping', props<{ choice: Topping }>());
export const RemoveTopping = createAction('salad/RemoveTopping', props<{ choice: Topping }>());
