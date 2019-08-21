import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasadaComponent } from './masada.component';

describe('MasadaComponent', () => {
  let component: MasadaComponent;
  let fixture: ComponentFixture<MasadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
