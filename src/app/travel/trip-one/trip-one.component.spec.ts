import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripOneComponent } from './trip-one.component';

describe('TripOneComponent', () => {
  let component: TripOneComponent;
  let fixture: ComponentFixture<TripOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
