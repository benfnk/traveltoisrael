import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCityTelAvivComponent } from './info-city-tel-aviv.component';

describe('InfoCityTelAvivComponent', () => {
  let component: InfoCityTelAvivComponent;
  let fixture: ComponentFixture<InfoCityTelAvivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCityTelAvivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCityTelAvivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
