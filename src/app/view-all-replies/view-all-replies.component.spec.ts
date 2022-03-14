import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRepliesComponent } from './view-all-replies.component';

describe('ViewAllRepliesComponent', () => {
  let component: ViewAllRepliesComponent;
  let fixture: ComponentFixture<ViewAllRepliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllRepliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
