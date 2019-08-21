import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCityEilatComponent } from './info-city-eilat.component';

describe('InfoCityEilatComponent', () => {
  let component: InfoCityEilatComponent;
  let fixture: ComponentFixture<InfoCityEilatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCityEilatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCityEilatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
