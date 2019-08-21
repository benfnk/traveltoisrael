import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTiberiasComponent } from './comment-tiberias.component';

describe('CommentTiberiasComponent', () => {
  let component: CommentTiberiasComponent;
  let fixture: ComponentFixture<CommentTiberiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentTiberiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentTiberiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
