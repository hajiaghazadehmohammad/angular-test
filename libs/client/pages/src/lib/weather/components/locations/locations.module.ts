import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocationsComponent} from './locations.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ],
  exports: [
    LocationsComponent
  ]
})
export class LocationsModule {
}
