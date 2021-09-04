import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { PostModel } from "../../models/post.model";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'app-user-container',
  template: `<app-home *ngIf="posts$ | async as posts" [posts]="posts"></app-home>`
})
export class UserContainerComponent implements OnInit {
  posts$!: Observable<PostModel[]>;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    const username = this.route.snapshot.params.username;
    this.postsService.fetchPostsByUser(username);
    this.posts$ = this.postsService.watchPosts$();
  }
}
