import { Service, signal } from '@angular/core';

@Service()
export class OrderService {
    name = signal<string>('');
    tel = signal<string>('');
}
