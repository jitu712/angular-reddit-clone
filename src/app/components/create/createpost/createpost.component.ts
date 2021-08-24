import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SubredditService } from 'src/app/services/subreddit.service';
import { CreateSubredditModel } from '../createsubreddit/createsubreddit.model';
import { CreatePostModel } from './createpost.model';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  form = new FormGroup({});
  createPostModel: CreatePostModel
  fields: FormlyFieldConfig[];

  onSubmit() {
    if (this.form.valid) {
      console.log(JSON.stringify(this.createPostModel, null, 2));
      this.postsService.createPost(this.createPostModel).subscribe(res => {
        console.log(res);
        // this._snackBar.open("Login successful", 'Ok', { duration: 3000 });
        // this.router.navigateByUrl("/");
      });
    }
  }

  constructor(
    private postsService: PostsService
  ) {
    this.createPostModel = new CreatePostModel();
    this.fields = this.createPostModel.getFields();
  }

  ngOnInit(): void {
  }

}
