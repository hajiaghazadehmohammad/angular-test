import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeSwitcherModule } from '../../theme-switcher';
import { NavigationModule } from '../../navigation';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ...MATERIAL_MODULES,
    ThemeSwitcherModule,
    NavigationModule
  ],
  declarations: [
    MainLayoutComponent
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule {
}
