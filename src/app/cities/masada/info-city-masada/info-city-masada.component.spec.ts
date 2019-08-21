import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCityMasadaComponent } from './info-city-masada.component';

describe('InfoCityMasadaComponent', () => {
  let component: InfoCityMasadaComponent;
  let fixture: ComponentFixture<InfoCityMasadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCityMasadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCityMasadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
