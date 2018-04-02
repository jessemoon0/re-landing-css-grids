import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPicturesComponent } from './review-pictures.component';

describe('ReviewPicturesComponent', () => {
  let component: ReviewPicturesComponent;
  let fixture: ComponentFixture<ReviewPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
