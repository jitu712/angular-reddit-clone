import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private posts$ = new BehaviorSubject<PostModel[]>([]);
  @Input() set posts(value: PostModel[]) {
    this.posts$.next(value);
  }

  get posts(): PostModel[] { return this.posts$.getValue() }
}
