import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormFlightComponent } from './date-form-flight.component';

describe('DateFormFlightComponent', () => {
  let component: DateFormFlightComponent;
  let fixture: ComponentFixture<DateFormFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFormFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFormFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
