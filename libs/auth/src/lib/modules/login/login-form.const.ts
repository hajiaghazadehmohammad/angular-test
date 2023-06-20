import { FormGroup, FormControl } from '@angular/forms';

export const LOGIN_FORM = {
  create: () => {
    return new FormGroup({
      email: new FormControl<string>('admin@admin.com'),
      password: new FormControl<string>('admin1234')
    });
  }
};
