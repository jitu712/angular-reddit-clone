import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { PostModel } from "src/app/models/post.model";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: 'app-home-container',
  template: `<app-home [posts]="(posts$ | async)!"></app-home>`
})
export class HomeContainerComponent {
  posts$!: Observable<PostModel[]>;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.fetchPosts();
    this.posts$ = this.postsService.watchPosts$();
  }
}
