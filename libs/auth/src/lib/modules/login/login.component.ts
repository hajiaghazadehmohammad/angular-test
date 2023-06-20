import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_FORM } from './login-form.const';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = LOGIN_FORM.create();

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService) {
  }

  ngOnInit() {
    localStorage.removeItem('isLoggedIn');
  }

  onLoginSubmit() {
    const { email, password } = this.loginForm.getRawValue();
    if (email === 'admin@admin.com' && password === 'admin1234') {
      localStorage.setItem('isLoggedIn', 'true');
      this._router.navigate(['/dashboard']);
    }
  }
}
