import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$!: Observable<PostModel[]>;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPosts();
  }

  deletePost(post: PostModel) {
    this.postsService.deletePost(post).subscribe(res => console.log(res));
    this.posts$.pipe(
      tap(posts => {
        let postIndex = posts.findIndex((value) => value === post);
        posts.slice(postIndex)
      })
    )
  }

}
