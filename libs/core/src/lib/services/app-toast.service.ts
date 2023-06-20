import {Injectable} from '@angular/core';
import {IndividualConfig, ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AppToastService {
  toastConfigs: Partial<IndividualConfig> = {
    closeButton: false,
    timeOut: 5000,
    positionClass: 'toast-bottom-left',
    easing: 'ease-in',
    easeTime: 300,
  };

  constructor(private toaster: ToastrService) {
  }

  show(message?: string, title?: string, override?: Partial<IndividualConfig>, type?: string) {
    this.toaster.show(message, title, override, type);
  }

  success(message?: string, title?: string, override?: Partial<IndividualConfig>) {
    this.toaster.success(message, title, {
      ...this.toastConfigs,
      ...override,
    });
  }

  error(message?: string, title?: string, override?: Partial<IndividualConfig>) {
    this.toaster.error(message, title, {
      ...this.toastConfigs,
      ...override,
    });
  }

  info(message?: string, title?: string, override?: Partial<IndividualConfig>) {
    this.toaster.info(message, title, {
      ...this.toastConfigs,
      ...override,
    });
  }

  warning(message?: string, title?: string, override?: Partial<IndividualConfig>) {
    this.toaster.warning(message, title, {
      ...this.toastConfigs,
      ...override,
    });
  }
}
