import { Routes } from "@angular/router";
import { Salad } from "./salad";
import { orderGuard } from "../guards/order-guard";

export const saladRoutes: Routes = [
  { path: 'salad', component: Salad, canActivate: [orderGuard] }
];