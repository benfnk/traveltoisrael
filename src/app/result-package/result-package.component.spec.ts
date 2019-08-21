import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPackageComponent } from './result-package.component';

describe('ResultPackageComponent', () => {
  let component: ResultPackageComponent;
  let fixture: ComponentFixture<ResultPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
