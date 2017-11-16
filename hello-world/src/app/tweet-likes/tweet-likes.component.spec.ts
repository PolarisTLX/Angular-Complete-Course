import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetLikesComponent } from './tweet-likes.component';

describe('TweetLikesComponent', () => {
  let component: TweetLikesComponent;
  let fixture: ComponentFixture<TweetLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
