import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterFieldComponent } from './counter-field.component';

describe('CounterFieldComponent', () => {
  let component: CounterFieldComponent;
  let fixture: ComponentFixture<CounterFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
