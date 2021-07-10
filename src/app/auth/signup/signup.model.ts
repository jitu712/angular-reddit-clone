import { FormlyFieldConfig } from '@ngx-formly/core';
export class SignUpModel {
  username!: string;
  password!: string;
  email!: string;

  getFields(): FormlyFieldConfig[] {
    return [
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
      }, {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          type: 'email',
          placeholder: 'Email',
          required: true,
        },
        validators: {
          email: {
            expression: (c: { value: string; }) => !c.value || /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(c.value),
            message: 'Please enter an valid email'
          },
        },
      },
    ]
  }

}
