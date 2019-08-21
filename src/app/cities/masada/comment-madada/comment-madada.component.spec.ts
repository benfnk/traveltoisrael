import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentMadadaComponent } from './comment-madada.component';

describe('CommentMadadaComponent', () => {
  let component: CommentMadadaComponent;
  let fixture: ComponentFixture<CommentMadadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentMadadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentMadadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
