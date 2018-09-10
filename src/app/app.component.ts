import { Component } from '@angular/core';
import { MyTranslateService } from './services/shared/my-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _myTraslateService: MyTranslateService) {
    this._myTraslateService.setDefaultAndUseLang('es');
  }

}
