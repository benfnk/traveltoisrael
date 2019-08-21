import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiberiasComponent } from './tiberias.component';

describe('TiberiasComponent', () => {
  let component: TiberiasComponent;
  let fixture: ComponentFixture<TiberiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiberiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiberiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
