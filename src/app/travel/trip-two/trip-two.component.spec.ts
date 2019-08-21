import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripTwoComponent } from './trip-two.component';

describe('TripTwoComponent', () => {
  let component: TripTwoComponent;
  let fixture: ComponentFixture<TripTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
