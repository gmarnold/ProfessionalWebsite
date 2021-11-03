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
    subtitle: 'Welcome to my professional website',
    content: "I'm a fourth-year Computer Science student studying for both my Bachelor's and Master's of Science in Computer Science at Illinois Institute of Technology.",
    
  };
  headshot = "../assets/headshot.jpeg"
  computers = "../assets/computers.jpg"

  constructor(private route: ActivatedRoute,
    private contentService: ContentService) { 
    }

  ngOnInit() {
    
    //const pageData = this.route.queryParams.subscribe['page'];
    const pageData = 'home';
    this.route.queryParams.subscribe(params => {
      const pageData = params['page'];
    });

    console.log("HEYYYY");
    console.log(pageData);
    //this.page = this.contentService.pages[pageData];
  }
}
