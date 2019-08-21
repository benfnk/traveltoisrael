import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTripComponent } from './info-trip.component';

describe('InfoTripComponent', () => {
  let component: InfoTripComponent;
  let fixture: ComponentFixture<InfoTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
