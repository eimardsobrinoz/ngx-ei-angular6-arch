import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyTranslateService } from '../../services/service.index';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  langForm: FormGroup;

  langModel: Object = {
    language: 'es'
  };

  constructor(private _myTranslateService: MyTranslateService) {
    this.langForm = new FormGroup({
      'language': new FormControl('es', Validators.required)
    });

    this.langForm.get('language').valueChanges.subscribe( newValue => this._myTranslateService.setLang(newValue));
  }

  ngOnInit() {
  }

  sendLangFormData() {
    console.log('Language form: ', this.langForm);
  }

  resetLangForm() {
    this.langForm.reset(this.langModel);
  }

}
