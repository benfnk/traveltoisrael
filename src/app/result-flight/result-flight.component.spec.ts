import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFlightComponent } from './result-flight.component';

describe('ResultFlightComponent', () => {
  let component: ResultFlightComponent;
  let fixture: ComponentFixture<ResultFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
