import {Component} from '@angular/core';
import {LANGUAGE_CODE_ENUM, NgxTranslateService} from "@angular-test/utils";

@Component({
  selector: 'angular-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';

  constructor(private ngxTranslateService:NgxTranslateService) {
    this.ngxTranslateService.setTranslation(LANGUAGE_CODE_ENUM.ENGLISH)
  }
}
