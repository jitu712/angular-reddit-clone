import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditListComponent } from './subreddit-list.component';

describe('SubredditListComponent', () => {
  let component: SubredditListComponent;
  let fixture: ComponentFixture<SubredditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubredditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
