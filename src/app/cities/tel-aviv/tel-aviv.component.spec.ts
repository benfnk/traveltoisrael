import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelAvivComponent } from './tel-aviv.component';

describe('TelAvivComponent', () => {
  let component: TelAvivComponent;
  let fixture: ComponentFixture<TelAvivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelAvivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelAvivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
