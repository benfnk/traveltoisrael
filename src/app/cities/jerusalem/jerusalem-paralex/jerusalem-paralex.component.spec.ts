import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JerusalemParalexComponent } from './jerusalem-paralex.component';

describe('JerusalemParalexComponent', () => {
  let component: JerusalemParalexComponent;
  let fixture: ComponentFixture<JerusalemParalexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JerusalemParalexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JerusalemParalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
