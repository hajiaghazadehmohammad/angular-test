import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
