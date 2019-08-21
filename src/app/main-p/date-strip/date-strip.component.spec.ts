import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateStripComponent } from './date-strip.component';

describe('DateStripComponent', () => {
  let component: DateStripComponent;
  let fixture: ComponentFixture<DateStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
