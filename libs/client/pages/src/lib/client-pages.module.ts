import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPagesRoutingModule } from './client-pages-routing.module';
import { ClientPagesComponent } from './client-pages.component';
import {MainLayoutModule} from "@angular-test/core";

@NgModule({
  imports: [
    CommonModule,
    ClientPagesRoutingModule,
    MainLayoutModule
  ],
  declarations: [ClientPagesComponent]
})
export class ClientPagesModule {
}
