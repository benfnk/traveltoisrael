import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCityHeifaComponent } from './info-city-heifa.component';

describe('InfoCityHeifaComponent', () => {
  let component: InfoCityHeifaComponent;
  let fixture: ComponentFixture<InfoCityHeifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCityHeifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCityHeifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
