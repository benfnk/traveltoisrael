import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EilatComponent } from './eilat.component';

describe('EilatComponent', () => {
  let component: EilatComponent;
  let fixture: ComponentFixture<EilatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EilatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EilatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
