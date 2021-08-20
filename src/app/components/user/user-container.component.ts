import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { PostModel } from "src/app/models/post.model";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: 'app-user-container',
  template: `<app-home *ngIf="posts$ | async as posts" [posts]="posts"></app-home>`
})
export class UserContainerComponent {
  posts$!: Observable<PostModel[]>;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    let username = this.route.snapshot.params.username;
    this.postsService.fetchPostsByUser(username);
    this.posts$ = this.postsService.watchPosts$();
  }
}
