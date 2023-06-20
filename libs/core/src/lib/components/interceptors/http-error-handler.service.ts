import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AppToastService} from "../../services/app-toast.service";

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerService {
  constructor(private appToastService: AppToastService, private router: Router) {}

  public handleErrorType(error: HttpErrorResponse) {
    switch (error.status) {
      case 400:
        this.appToastService.error('', `${error.error.message}`);
        break;
      case 401:
        this.router.navigate(['/auth']);
        break;
      case 403:
        this.appToastService.error('', `${error.error.message}`);
        break;
      case 404:
        this.appToastService.error('', `${error.error.message}`);
        break;
      case 422:
        if (error?.error?.errors) {
          Object.keys(error?.error?.errors).forEach(errKey => {
            this.appToastService.error('', `${error?.error?.errors[errKey]}`);
          });
        }
        this.appToastService.error('', `${error.error.message}`);
        break;
      case 500:
        this.appToastService.error(error.message, `${error.error.message}`);
        break;
    }
  }
}
