import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CreatePostModel } from './createpost.model';
import { PostsService } from '../../../services/posts.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

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
      this.postsService.createPost(this.createPostModel);
    }
    this.router.navigateByUrl("/");
    this.matDialog.closeAll();
  }

  constructor(
    private postsService: PostsService,
    private router: Router,
    private matDialog: MatDialog
  ) {
    this.createPostModel = new CreatePostModel();
    this.fields = this.createPostModel.getFields();
  }

  ngOnInit(): void {
  }

}
