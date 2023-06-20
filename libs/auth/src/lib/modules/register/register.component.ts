import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { REGISTER_FORM_CONST } from './register-form.const';
import { AuthService } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

  registerForm: FormGroup = REGISTER_FORM_CONST.create();

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
  }

  onRegisterSubmit() {
    // this._toastrService.success('Registerd Ssuccessfully');
    this._router.navigate(['/auth/login']);
  }
}
