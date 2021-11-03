import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages : any = {
    "home": {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/computertea.jpg'},
    "about": {title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/boston.jpg'},
    "contact": {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/boston.jpg'}
  };
  constructor() { }
}
