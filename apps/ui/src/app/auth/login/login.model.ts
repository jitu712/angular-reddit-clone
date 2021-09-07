import { FormlyFieldConfig } from '@ngx-formly/core';
export class LoginModel {
  username!: string;
  password!: string;
}

export const LoginFields: FormlyFieldConfig[] =
  [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Username',
        placeholder: 'Username',
        required: true,
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        type: 'password',
        placeholder: 'Password',
        required: true,
      }
    }
  ]
