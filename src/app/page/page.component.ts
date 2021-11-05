import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../shared/services/content.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  page = {
    title: "Hi! I'm Grace!",
    subtitle: 'Welcome to my professional website.',
    content: "I'm a fourth-year Computer Science student studying for both my Bachelor's and Master's of Science in Computer Science at Illinois Institute of Technology.",
    title2: "Who am I?",
    subtitle2: "And what are my goals?",
    content2: "My two largest passion are ",
    content3: "technology",
    content4:  "and ",
    content5: "leadership",
    content6: "! I love getting involved on campus in organizations such as our ",
    content7: "Association for Computing Machinery-Women (ACM-W)",
    content8: ", where I can provide other female students with the tools and confidence to succeed in the field of computer science. With the ",
    content9: "Developer Student Clubs",
    content10: ", I connect student developers with each other so they can collaborate on exciting projects, and expose them to the technologies they need to implement their solutions.",
    content11: "As I grow my network and technological skills, I want to share my experiences and knowledge with the world and light the way to a bright future for all people in tech."
  };
  headshot = "assets/headshot.jpeg"
  computers = "assets/computers.jpg"

  constructor(private route: ActivatedRoute,
    private contentService: ContentService) { 
    }

  ngOnInit() {
    
    //const pageData = this.route.queryParams.subscribe['page'];
    const pageData = 'home';
    this.route.queryParams.subscribe(params => {
      const pageData = params['page'];
    });
    console.log(pageData);
    //this.page = this.contentService.pages[pageData];
  }
}
