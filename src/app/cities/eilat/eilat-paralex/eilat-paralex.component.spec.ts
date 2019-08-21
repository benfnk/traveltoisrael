import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EilatParalexComponent } from './eilat-paralex.component';

describe('EilatParalexComponent', () => {
  let component: EilatParalexComponent;
  let fixture: ComponentFixture<EilatParalexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EilatParalexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EilatParalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
