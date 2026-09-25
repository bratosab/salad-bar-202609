import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrderService } from '../services/order-service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';

export const orderGuard: CanActivateFn = (route, state) => {
  const orderService = inject(OrderService);
  const router = inject(Router);
  const store = inject(Store);

  const appState = store.selectSignal<AppState>(state => state.app)

  if (appState().name && appState().tel) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
