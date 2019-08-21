import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentJerusalemComponent } from './comment-jerusalem.component';

describe('CommentJerusalemComponent', () => {
  let component: CommentJerusalemComponent;
  let fixture: ComponentFixture<CommentJerusalemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentJerusalemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentJerusalemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
