import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  menu: any = [
    {
      title: 'HOME.TITLE', url: '/home', params: ''
    },
    {
      title: 'PROFESIONAL.TITLE', url: '/profesional', params: ''
    },
    {
      title: 'ABOUTME.TITLE', url: '/aboutMe', params: ''
    },
    {
      title: 'BLOG.TITLE', url: '/blog', params: ''
    },
    {
      title: 'CONTACT.TITLE', url: '/contact', params: ''
    }
];

  constructor() { }

  get getMenu(): any[] {
    return this.menu;
  }





}
