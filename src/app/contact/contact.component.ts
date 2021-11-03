import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  page = {
    title: 'Contact me!',
    email: 'Send me an email!',
    github: 'Follow me on GitHub!',
    linkedin: 'Connect with me on LinkedIn!'
  };
  goog = "assets/goog.jpg"
  rosie = "assets/rosie2.jpg"
  daisy = "assets/daisy.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
