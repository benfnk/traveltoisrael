import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormHotelComponent } from './date-form-hotel.component';

describe('DateFormHotelComponent', () => {
  let component: DateFormHotelComponent;
  let fixture: ComponentFixture<DateFormHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFormHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFormHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
