import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripThreeComponent } from './trip-three.component';

describe('TripThreeComponent', () => {
  let component: TripThreeComponent;
  let fixture: ComponentFixture<TripThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
