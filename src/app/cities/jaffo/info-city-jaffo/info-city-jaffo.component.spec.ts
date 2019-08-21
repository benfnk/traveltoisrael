import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCityJaffoComponent } from './info-city-jaffo.component';

describe('InfoCityJaffoComponent', () => {
  let component: InfoCityJaffoComponent;
  let fixture: ComponentFixture<InfoCityJaffoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCityJaffoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCityJaffoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
