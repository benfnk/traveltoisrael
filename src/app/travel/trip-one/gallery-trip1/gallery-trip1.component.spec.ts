import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTrip1Component } from './gallery-trip1.component';

describe('GalleryTrip1Component', () => {
  let component: GalleryTrip1Component;
  let fixture: ComponentFixture<GalleryTrip1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTrip1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTrip1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
