import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroWordComponent } from './intro-word.component';

describe('IntroWordComponent', () => {
  let component: IntroWordComponent;
  let fixture: ComponentFixture<IntroWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
