import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherComponent} from './weather.component';
import {MatCardModule} from '@angular/material/card';
import {LoadingModule, SharedModule} from "@angular-test/shared";
import {WeatherRoutingModule} from "./weather-routing.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {LocationsModule} from "./components/locations/locations.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    LoadingModule,
    NgSelectModule,
    WeatherRoutingModule,
    LocationsModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class WeatherModule {
}
