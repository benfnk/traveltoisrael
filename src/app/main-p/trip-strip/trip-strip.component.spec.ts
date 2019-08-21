import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripStripComponent } from './trip-strip.component';

describe('TripStripComponent', () => {
  let component: TripStripComponent;
  let fixture: ComponentFixture<TripStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
