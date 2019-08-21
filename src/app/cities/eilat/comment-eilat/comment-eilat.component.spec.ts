import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEilatComponent } from './comment-eilat.component';

describe('CommentEilatComponent', () => {
  let component: CommentEilatComponent;
  let fixture: ComponentFixture<CommentEilatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentEilatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentEilatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
