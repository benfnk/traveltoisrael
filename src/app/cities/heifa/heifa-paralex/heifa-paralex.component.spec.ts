import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeifaParalexComponent } from './heifa-paralex.component';

describe('HeifaParalexComponent', () => {
  let component: HeifaParalexComponent;
  let fixture: ComponentFixture<HeifaParalexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeifaParalexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeifaParalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
