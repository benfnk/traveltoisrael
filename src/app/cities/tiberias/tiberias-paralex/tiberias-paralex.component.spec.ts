import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiberiasParalexComponent } from './tiberias-paralex.component';

describe('TiberiasParalexComponent', () => {
  let component: TiberiasParalexComponent;
  let fixture: ComponentFixture<TiberiasParalexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiberiasParalexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiberiasParalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
