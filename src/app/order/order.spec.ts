import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Order } from './order';
import { provideMockStore } from '@ngrx/store/testing';

describe('Order', () => {
  let component: Order;
  let fixture: ComponentFixture<Order>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Order],
      providers: [provideMockStore()]
    }).compileComponents();

    fixture = TestBed.createComponent(Order);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain two inputs in the form', () => {
    const compiled = fixture.nativeElement as HTMLElement

    expect(compiled.querySelector('form')).toBeTruthy()
    expect(compiled.querySelectorAll('form > mat-form-field input[matinput]')).toHaveLength(2)
    expect(compiled.querySelector('form > button[matbutton][type="submit"]')).toBeTruthy()
  })
});
