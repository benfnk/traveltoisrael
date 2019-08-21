import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultHotelFlightComponent } from './result-hotel-flight.component';

describe('ResultHotelFlightComponent', () => {
  let component: ResultHotelFlightComponent;
  let fixture: ComponentFixture<ResultHotelFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultHotelFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultHotelFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
