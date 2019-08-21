import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCityTelAvivComponent } from './comment-city-tel-aviv.component';

describe('CommentCityTelAvivComponent', () => {
  let component: CommentCityTelAvivComponent;
  let fixture: ComponentFixture<CommentCityTelAvivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentCityTelAvivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCityTelAvivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
