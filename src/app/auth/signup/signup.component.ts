import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../shared/auth.service';
import { SignUpModel } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({});
  signUpModel: SignUpModel;
  fields: FormlyFieldConfig[];

  onSubmit() {
    if (this.form.valid) {
      console.log(JSON.stringify(this.signUpModel, null, 2));
      this.authService.signup(this.signUpModel).subscribe(res => console.log(res));
    }
  }

  constructor(
    private authService: AuthService
  ) {
    this.signUpModel = new SignUpModel();
    this.fields = this.signUpModel.getFields();
  }

  ngOnInit(): void {
  }

}
