import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LANGUAGE_CODE_ENUM} from '../models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NgxTranslateService {
  isLoading = false;
  translations = undefined;

  constructor(private translate: TranslateService, private http: HttpClient) {
  }

  setTranslation(lang: LANGUAGE_CODE_ENUM) {
    if (this.translations) {
      this.applyNewTranslations(lang, this.translations);
    } else {
      this.isLoading = true;
      this.http.get(`assets/translations/` + lang + `.json`).subscribe(
        (json: any) => {
          this.isLoading = false;
          this.translations = json;
          this.applyNewTranslations(lang, this.translations);
        },
        error => {
          this.isLoading = false;
        }
      );
    }
  }

  private applyNewTranslations(lang: LANGUAGE_CODE_ENUM, translations: any) {
    this.translate.setTranslation(lang, translations);
    this.translate.use(lang);
  }
}
