import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaffoComponent } from './jaffo.component';

describe('JaffoComponent', () => {
  let component: JaffoComponent;
  let fixture: ComponentFixture<JaffoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaffoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaffoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
