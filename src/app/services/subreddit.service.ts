import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubredditModel } from '../models/subreddit.model';
import { CreateSubredditModel } from '../components/create/createsubreddit/createsubreddit.model';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http: HttpClient) { }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>('http://localhost:8080/api/subreddit/');
  }

  createSubreddit(createSubredditModel: CreateSubredditModel) {
    return this.http.post('http://localhost:8080/api/subreddit/', createSubredditModel);
  }
}
