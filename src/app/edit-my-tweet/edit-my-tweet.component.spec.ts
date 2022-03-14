import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyTweetComponent } from './edit-my-tweet.component';

describe('EditMyTweetComponent', () => {
  let component: EditMyTweetComponent;
  let fixture: ComponentFixture<EditMyTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
