import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubredditService } from '../../services/subreddit.service';
import { SubredditModel } from '../../models/subreddit.model';

@Component({
  selector: 'app-subreddit-list',
  templateUrl: './subreddit-list.component.html',
  styleUrls: ['./subreddit-list.component.scss']
})
export class SubredditListComponent implements OnInit {

  subreddits$!: Observable<SubredditModel[]>;

  constructor(
    private subredditService: SubredditService
  ) { }

  ngOnInit(): void {
    this.subredditService.getAllSubreddits();
    this.subreddits$ = this.subredditService.watchSubreddits$();
  }

}
