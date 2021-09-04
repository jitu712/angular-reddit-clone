import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PostModel } from "../../models/post.model";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'app-home-container',
  template: `<app-home [posts]="(posts$ | async)!"></app-home>`
})
export class HomeContainerComponent implements OnInit {
  posts$!: Observable<PostModel[]>;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.fetchPosts();
    this.posts$ = this.postsService.watchPosts$();
  }
}
