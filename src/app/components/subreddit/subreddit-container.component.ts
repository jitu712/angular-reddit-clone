import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-subreddit-container',
  template: `<app-home *ngIf="posts$ | async as posts" [posts]="posts"></app-home>`
})
export class SubredditContainerComponent implements OnInit {
  posts$!: Observable<PostModel[]>;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    let subredditname = this.route.snapshot.params.subredditname;
    this.postsService.fetchPostsInSubreddit(subredditname);
    this.posts$ = this.postsService.watchPosts$();
  }
}
