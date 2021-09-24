import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubredditModel } from '../models/subreddit.model';
import { CreateSubredditModel } from '../components/create/createsubreddit/createsubreddit.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http: HttpClient) { }

  private subreddits$ = new BehaviorSubject<SubredditModel[]>([]);
  subreddits: SubredditModel[] = [];

  getAllSubreddits() {
    return this.http.get<Array<SubredditModel>>(environment.endpoint + '/api/subreddit/').subscribe(posts => this.setPosts(posts));;
  }

  createSubreddit(createSubredditModel: CreateSubredditModel) {
    return this.http.post(environment.endpoint + '/api/subreddit/', createSubredditModel);
  }

  setPosts(subreddits: SubredditModel[]) {
    this.subreddits = subreddits;
    this.subreddits$.next(subreddits);
  }

  watchSubreddits$() {
    return this.subreddits$.asObservable();
  }
}
