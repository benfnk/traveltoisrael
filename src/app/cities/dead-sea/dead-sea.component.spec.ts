import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadSeaComponent } from './dead-sea.component';

describe('DeadSeaComponent', () => {
  let component: DeadSeaComponent;
  let fixture: ComponentFixture<DeadSeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadSeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
