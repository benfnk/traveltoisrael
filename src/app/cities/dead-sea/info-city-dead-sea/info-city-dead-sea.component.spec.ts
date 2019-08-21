import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCityDeadSeaComponent } from './info-city-dead-sea.component';

describe('InfoCityDeadSeaComponent', () => {
  let component: InfoCityDeadSeaComponent;
  let fixture: ComponentFixture<InfoCityDeadSeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCityDeadSeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCityDeadSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
