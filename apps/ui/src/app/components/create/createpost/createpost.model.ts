import { FormlyFieldConfig } from '@ngx-formly/core';
export class CreatePostModel {
  postName!: string;
  subredditName!: string;
  url!: string;
  description!: string;

  getFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name of Post',
          placeholder: 'Name of Post',
          required: true,
        }
      }, {
        key: 'subredditName',
        type: 'input',
        templateOptions: {
          label: 'Name of Subreddit',
          placeholder: 'Name of Subreddit',
          required: true,
        }
      }, {
        key: 'url',
        type: 'input',
        templateOptions: {
          label: 'URL',
          placeholder: 'URL',
          required: true,
        }
      },
      {
        key: 'description',
        type: 'input',
        templateOptions: {
          label: 'Description of Post',
          placeholder: 'Description of Post',
          required: true,
        }
      }
    ]
  }

}
