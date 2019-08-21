import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasadaParalexComponent } from './masada-paralex.component';

describe('MasadaParalexComponent', () => {
  let component: MasadaParalexComponent;
  let fixture: ComponentFixture<MasadaParalexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasadaParalexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasadaParalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
