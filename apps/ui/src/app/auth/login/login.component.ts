import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../shared/auth.service';
import { LoginModel } from './login.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = new FormGroup({});
  loginModel: LoginModel;
  fields: FormlyFieldConfig[];

  onSubmit() {
    if (this.form.valid) {
      console.log(JSON.stringify(this.loginModel, null, 2));
      this.authService.login(this.loginModel).subscribe(res => {
        console.log(res);
        this._snackBar.open("Login successful", 'Ok', { duration: 3000 });
        this.router.navigateByUrl("/");
      });
    }
  }

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginModel = new LoginModel();
    this.fields = this.loginModel.getFields();
  }




}
