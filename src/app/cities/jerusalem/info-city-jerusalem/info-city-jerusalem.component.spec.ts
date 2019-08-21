import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCityJerusalemComponent } from './info-city-jerusalem.component';

describe('InfoCityJerusalemComponent', () => {
  let component: InfoCityJerusalemComponent;
  let fixture: ComponentFixture<InfoCityJerusalemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCityJerusalemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCityJerusalemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
