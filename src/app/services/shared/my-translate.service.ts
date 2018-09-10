import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  constructor(private translate: TranslateService) {
  }

  setDefaultAndUseLang(value: string) {
    this.translate.setDefaultLang(value);
    this.translate.use(value);
  }

  setDefaultLang(value: string) {
    this.translate.setDefaultLang(value);
  }

  setLang(value: string) {
    this.translate.use(value);
  }

}
