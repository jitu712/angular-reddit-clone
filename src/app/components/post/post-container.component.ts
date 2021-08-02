import { Component, Input } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-post-container',
  template: `<app-post [post]="post" (deletePost$)="deletePost($event)"></app-post>`
})
export class PostContainerComponent {
  @Input() post!: PostModel;

  constructor(
    private postService: PostsService
  ) {

  }

  deletePost(post: PostModel) {
    this.postService.deletePost(post);
  }
}
