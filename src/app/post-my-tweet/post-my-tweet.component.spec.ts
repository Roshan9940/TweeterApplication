import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMyTweetComponent } from './post-my-tweet.component';

describe('PostMyTweetComponent', () => {
  let component: PostMyTweetComponent;
  let fixture: ComponentFixture<PostMyTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMyTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMyTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
