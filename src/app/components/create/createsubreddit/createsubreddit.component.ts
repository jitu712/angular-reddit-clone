import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LoginModel } from 'src/app/auth/login/login.model';
import { CreateSubredditModel } from './createsubreddit.model';
import { SubredditService } from '../../../services/subreddit.service';

@Component({
  selector: 'app-createsubreddit',
  templateUrl: './createsubreddit.component.html',
  styleUrls: ['./createsubreddit.component.css']
})
export class CreatesubredditComponent implements OnInit {

  form = new FormGroup({});
  createsubredditmodel: CreateSubredditModel
  fields: FormlyFieldConfig[];

  onSubmit() {
    if (this.form.valid) {
      console.log(JSON.stringify(this.createsubredditmodel, null, 2));
      this.subredditService.createSubreddit(this.createsubredditmodel).subscribe(res => {
        console.log(res);
        // this._snackBar.open("Login successful", 'Ok', { duration: 3000 });
        // this.router.navigateByUrl("/");
      });
    }
  }

  constructor(
    private subredditService: SubredditService
  ) {
    this.createsubredditmodel = new CreateSubredditModel();
    this.fields = this.createsubredditmodel.getFields();
  }

  ngOnInit(): void {
  }

}
