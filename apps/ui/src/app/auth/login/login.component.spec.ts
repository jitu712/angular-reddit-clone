import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../shared/auth.service';
import { of } from 'rxjs';
import { LoginModel } from './login.model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router

  const routerSpy = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    navigateByUrl: (): void => { }
  }

  // const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  const spy = jest.spyOn(routerSpy, 'navigateByUrl');

  const loginModelStub: LoginModel = {
    password: 'testPassword',
    username: 'testUsername'
  }

  const authServiceStub: Partial<AuthService> = {
    login: () => of(true)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('User should be able to #login', () => {

    component.form = new FormGroup({});
    component.loginModel = loginModelStub;
    component.onSubmit();
    fixture.detectChanges()
    expect(component.isLoggedIn).toBeTruthy();
    // const spy = router.navigateByUrl as jasmine.Spy;
    // const navArgs = spy.calls.first().args[0];
    // expect(navArgs).toBe('/');

    expect(spy).toHaveBeenCalledWith('/', { replaceUrl: true })
  })
});
