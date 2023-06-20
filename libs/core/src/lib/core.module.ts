import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreManagerService } from './services/core-manager.service';
import { CoreConfigInterface } from './interfaces/core-config.interface';

@NgModule({
  imports: [CommonModule]
})
export class CoreModule {
  static forRoot(coreConfig: CoreConfigInterface): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [CoreManagerService, { provide: 'coreConfig', useValue: coreConfig }]
    };
  }
}
