import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesubredditComponent } from './createsubreddit.component';

describe('CreatesubredditComponent', () => {
  let component: CreatesubredditComponent;
  let fixture: ComponentFixture<CreatesubredditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesubredditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesubredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
