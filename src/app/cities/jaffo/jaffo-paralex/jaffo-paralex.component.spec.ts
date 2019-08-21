import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaffoParalexComponent } from './jaffo-paralex.component';

describe('JaffoParalexComponent', () => {
  let component: JaffoParalexComponent;
  let fixture: ComponentFixture<JaffoParalexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaffoParalexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaffoParalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
