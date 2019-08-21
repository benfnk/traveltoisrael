import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeifaComponent } from './heifa.component';

describe('HeifaComponent', () => {
  let component: HeifaComponent;
  let fixture: ComponentFixture<HeifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
