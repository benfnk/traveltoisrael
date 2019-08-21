import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentJaffoComponent } from './comment-jaffo.component';

describe('CommentJaffoComponent', () => {
  let component: CommentJaffoComponent;
  let fixture: ComponentFixture<CommentJaffoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentJaffoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentJaffoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
