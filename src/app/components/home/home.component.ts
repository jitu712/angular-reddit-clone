import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PostModel, PostStub } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // posts$!: Observable<PostModel[]>;
  private posts$ = new BehaviorSubject<PostModel[]>([]);
  @Input() set posts(value: PostModel[]) {
    this.posts$.next(value);
  }

  get posts(): PostModel[] { return this.posts$.getValue() }


  // constructor(
  //   private postsService: PostsService
  // ) { }

  // ngOnInit(): void {
  //   this.posts$ = this.postsService.getAllPosts();
  // }

  deletePost(post: PostModel) {
    // console.log('deletePost')
    // this.postsService.deletePost(post).subscribe(res => console.log(res));
    // this.posts$.pipe(

    // ).subscribe((post) => { console.log(post) })
  }

}
