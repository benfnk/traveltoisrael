import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultHotelComponent } from './result-hotel.component';

describe('ResultHotelComponent', () => {
  let component: ResultHotelComponent;
  let fixture: ComponentFixture<ResultHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
