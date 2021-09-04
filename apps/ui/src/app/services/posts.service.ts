import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreatePostModel } from '../components/create/createpost/createpost.model';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  createPost(createPostModel: CreatePostModel) {
    return this.http.post('http://localhost:8080/api/posts/', createPostModel);
  }
  getAllPostsByUser(username: any) {
    return this.http.get<Array<PostModel>>(`http://localhost:8080/api/posts/by-user/${username}`);
  }
  getAllPostsInSubreddit(subredditname: string) {
    return this.http.get<Array<PostModel>>(`http://localhost:8080/api/posts/by-subreddit/${subredditname}`);
  }
  fetchPosts() {
    this.getAllPosts().subscribe(posts => this.setPosts(posts));
  }

  fetchPostsInSubreddit(subredditname: string) {
    this.getAllPostsInSubreddit(subredditname).subscribe(posts => this.setPosts(posts));
  }

  fetchPostsByUser(subredditname: string) {
    this.getAllPostsByUser(subredditname).subscribe(posts => this.setPosts(posts));
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
