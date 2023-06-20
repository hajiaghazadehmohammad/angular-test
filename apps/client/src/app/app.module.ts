import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from "@angular-test/core";
import {HttpClientModule} from "@angular/common/http";
import {NgxTranslateModule} from "@angular-test/utils";
import {httpInterceptorProviders} from "@angular-test/core";
import {ClientConfig} from "./configs/client-config";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTranslateModule,
    CoreModule.forRoot(new ClientConfig()),
    ToastrModule.forRoot(),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}

