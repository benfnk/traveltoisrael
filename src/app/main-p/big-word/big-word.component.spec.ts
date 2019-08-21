import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigWordComponent } from './big-word.component';

describe('BigWordComponent', () => {
  let component: BigWordComponent;
  let fixture: ComponentFixture<BigWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
