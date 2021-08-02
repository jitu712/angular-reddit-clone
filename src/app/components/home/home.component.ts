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
  private posts$ = new BehaviorSubject<PostModel[]>([]);
  @Input() set posts(value: PostModel[]) {
    this.posts$.next(value);
  }

  get posts(): PostModel[] { return this.posts$.getValue() }
}
