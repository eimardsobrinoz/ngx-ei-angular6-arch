import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProfesionalComponent } from './components/profesional/profesional.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profesional', component: ProfesionalComponent },
    { path: 'aboutMe', component: AboutMeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent },
];

export const APP_ROUTES = RouterModule.forRoot( app_routes, { useHash: true } );
