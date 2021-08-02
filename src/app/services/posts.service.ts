import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  fetchPosts() {
    this.getAllPosts().subscribe(posts => this.setPosts(posts));
  }

  private posts$ = new BehaviorSubject<PostModel[]>([]);
  posts: PostModel[] = [];

  setPosts(posts: PostModel[]) {
    this.posts = posts;
    this.posts$.next(posts);
  }

  watchPosts$() {
    return this.posts$.asObservable();
  }

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/');
  }

  deletePost(post: PostModel) {
    this.posts.splice(this.posts.findIndex(singlePost => post.id === singlePost.id), 1)
    this.setPosts(this.posts);
    this.http.delete('http://localhost:8080/api/posts/', { body: post.id }).subscribe(() => { });
  }
}
