import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCityTiberiasComponent } from './info-city-tiberias.component';

describe('InfoCityTiberiasComponent', () => {
  let component: InfoCityTiberiasComponent;
  let fixture: ComponentFixture<InfoCityTiberiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCityTiberiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCityTiberiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
