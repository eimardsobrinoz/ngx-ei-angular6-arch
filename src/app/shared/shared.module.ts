// @angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../factories/http-loader-factory';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Custom
import { LanguageComponent } from './language/language.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    LanguageComponent
  ],
  exports: [
    HeaderComponent,
    LanguageComponent,
    TranslateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
