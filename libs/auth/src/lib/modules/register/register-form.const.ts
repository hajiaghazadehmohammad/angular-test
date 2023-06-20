import { FormControl, FormGroup, Validators } from '@angular/forms';

export const REGISTER_FORM_CONST = {
  create: () => {
    return new FormGroup({
      email: new FormControl('', [Validators.email]),
      password: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });
  }
};
