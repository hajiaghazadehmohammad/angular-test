import { Inject, Injectable } from '@angular/core';
import { CoreConfigInterface } from '../interfaces/core-config.interface';

@Injectable({
  providedIn: 'root'
})
export class CoreManagerService {
  constructor(@Inject('coreConfig') public coreConfig: CoreConfigInterface) {
  }
}
