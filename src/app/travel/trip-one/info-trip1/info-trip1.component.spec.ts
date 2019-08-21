import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTrip1Component } from './info-trip1.component';

describe('InfoTrip1Component', () => {
  let component: InfoTrip1Component;
  let fixture: ComponentFixture<InfoTrip1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTrip1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTrip1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
