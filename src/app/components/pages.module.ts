import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { ResumeComponent } from './resume/resume.component';
import { ProfesionalComponent } from './profesional/profesional.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SharedModule } from '../shared/shared.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DirectivesModule
  ],
  declarations: [
    AboutMeComponent,
    ContactComponent,
    ProfesionalComponent,
    ResumeComponent,
    BlogComponent
  ]
})
export class PagesModule { }
