import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadSeaParalexComponent } from './dead-sea-paralex.component';

describe('DeadSeaParalexComponent', () => {
  let component: DeadSeaParalexComponent;
  let fixture: ComponentFixture<DeadSeaParalexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadSeaParalexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadSeaParalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
