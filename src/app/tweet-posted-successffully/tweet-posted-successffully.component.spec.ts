import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPostedSuccessffullyComponent } from './tweet-posted-successffully.component';

describe('TweetPostedSuccessffullyComponent', () => {
  let component: TweetPostedSuccessffullyComponent;
  let fixture: ComponentFixture<TweetPostedSuccessffullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetPostedSuccessffullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPostedSuccessffullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
