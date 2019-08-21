import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelAvivParalexComponent } from './tel-aviv-paralex.component';

describe('TelAvivParalexComponent', () => {
  let component: TelAvivParalexComponent;
  let fixture: ComponentFixture<TelAvivParalexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelAvivParalexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelAvivParalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
