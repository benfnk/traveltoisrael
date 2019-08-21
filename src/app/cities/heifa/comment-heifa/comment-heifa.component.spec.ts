import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentHeifaComponent } from './comment-heifa.component';

describe('CommentHeifaComponent', () => {
  let component: CommentHeifaComponent;
  let fixture: ComponentFixture<CommentHeifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentHeifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentHeifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
