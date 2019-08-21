import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanStripComponent } from './explan-strip.component';

describe('ExplanStripComponent', () => {
  let component: ExplanStripComponent;
  let fixture: ComponentFixture<ExplanStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplanStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplanStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
