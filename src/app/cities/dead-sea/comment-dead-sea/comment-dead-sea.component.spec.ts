import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDeadSeaComponent } from './comment-dead-sea.component';

describe('CommentDeadSeaComponent', () => {
  let component: CommentDeadSeaComponent;
  let fixture: ComponentFixture<CommentDeadSeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentDeadSeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDeadSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
