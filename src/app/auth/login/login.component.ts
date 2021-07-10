import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../shared/auth.service';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({});
  loginModel: LoginModel;
  fields: FormlyFieldConfig[];

  onSubmit() {
    if (this.form.valid) {
      console.log(JSON.stringify(this.loginModel, null, 2));
      this.authService.login(this.loginModel).subscribe(res => console.log(res));
    }
  }

  constructor(
    private authService: AuthService
  ) {
    this.loginModel = new LoginModel();
    this.fields = this.loginModel.getFields();
  }


  ngOnInit(): void {
  }

}
