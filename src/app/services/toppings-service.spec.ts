import { TestBed } from '@angular/core/testing';
import { ToppingsService } from './toppings-service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { Topping } from '../models/topping.model';

describe('ToppingsService', () => {
  let service: ToppingsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });

    service = TestBed.inject(ToppingsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  const toppingsMock: Topping[] = [
    {
      id: 0,
      name: 'Test ingredient 1',
      price: 10
    },
    {
      id: 0,
      name: 'Test ingredient 2',
      price: 10
    }
  ]

  it('should fetch toppings list when calling getToppings()', async () => {

    const result = firstValueFrom(service.getToppings())

    const request = httpController.expectOne('https://retoolapi.dev/XDaOzA/toppings');
    expect(request.request.method).toBe('GET')
    request.flush(toppingsMock)

    expect(await result).toEqual(toppingsMock)
  });
});
