import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  page = {
    title: 'Contact',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
