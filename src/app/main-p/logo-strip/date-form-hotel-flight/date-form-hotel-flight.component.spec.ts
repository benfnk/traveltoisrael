import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormHotelFlightComponent } from './date-form-hotel-flight.component';

describe('DateFormHotelFlightComponent', () => {
  let component: DateFormHotelFlightComponent;
  let fixture: ComponentFixture<DateFormHotelFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFormHotelFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFormHotelFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
