import { FormlyFieldConfig } from '@ngx-formly/core';
export class CreateSubredditModel {
  name!: string;
  description!: string;

  getFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name of Subreddit',
          placeholder: 'Name of Subreddit',
          required: true,
        }
      },
      {
        key: 'description',
        type: 'input',
        templateOptions: {
          label: 'Description of Subreddit',
          placeholder: 'Description of Subreddit',
          required: true,
        }
      }
    ]
  }

}
