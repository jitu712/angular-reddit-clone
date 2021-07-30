import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostModel, PostStub } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  private post$ = new BehaviorSubject<PostModel>(PostStub);
  @Input() set post(value: PostModel) {
    this.post$.next(value);
  }

  @Output() deletePost$ = new EventEmitter<PostModel>();

  get post(): PostModel { return this.post$.getValue() }

  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
  }

  deletePost(post: PostModel) {
    console.log('deletePost')
    this.deletePost$.emit(post);
  }

}
