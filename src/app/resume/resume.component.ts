import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  page = {
    title: 'Resume',
    education: 'Education',
    educationDegree: 'Bachelors/Masters of Science (BS/MS) in Computer Science | Illinois Institute of Technlogy',
    educationGraduation: 'Expected Graduation: May 2022 | GPA 3.9/4.0',
    educationRelevant: 'Relevant courses:',
    educationCourses: 'Data Structures & Algorithms, Discrete Structures, Software Engineering, Mobile Web Apps, Database Organization, Systems Programming, Object-Oriented Programming, Social Media Analysis',
    skills: 'Skills',
    skillsContent: 'Python, Java, C, Angular (TypeScript), Android, SQL, Unix/Linux, Git, Tableau, JavaScript, Scala, Go',
    experience: 'Experience',
    experienceSoftware: 'Software Engineering Intern',
    experienceBlackRock: 'BlackRock [Chicago, IL]',
    experienceBlackRock1: 'Developed Exceptions Monitor application for Aladdin Product Group with two other interns',
    experienceBlackRock2: 'Employed Angular and Java to retrieve exceptions from server, connect to front-end application, and display aggregated information in an interactive client for thousands of exceptions across BlackRock',
    experienceBlackRock3: 'Learned skills such as the Spring framework and Agile software development techniques',
    experienceTableau: 'Technical Product Manager & Tableau Visualizations Engineer',
    experienceGE: 'General Electric Healthcare [Chicago, IL]',
    experienceGE1: 'Built 10 visualizations & reports for HR Digital Technology Data & Analytics team with Tableau',
    experienceGE2: 'Created 360° Product Manager assessments, allowing for better business-wide teamwork',
    experienceGE3: 'Earned GE Lean Fundamentals certificate and developed Project Management skills',
    experienceResearch: 'Wireless Networking & Communication Research Assistant',
    experienceIIT: 'Illinois Institute of Technology [Chicago, IL] ',
    experienceIIT1: 'Redesigned current data processing and visualization of 17 GB of data per day over several years',
    experienceIIT2: 'Lead meetings & workshops in Python (Numpy, Pandas) for research team of 14 members',
    leadership: 'Leadership Experience',
    leadershipDSC: 'Developer Student Clubs | President & Founder',
    leadershipDSC1: 'Teach Google technologies to organization of 50+ developers; founded organization at Illinois Tech',
    leadershipACMW: 'Association for Computing Machinery-Women | Secretary',
    leadershipACMW1: 'Lead career development and technology workshops to an organization of 300+ women',
    leadershipACMW2: 'Organize events & trips to conferences, sending 15 members to Grace Hopper Celebration 2019',
    leadershipTA: 'Computer Science Department | Teaching/Lab Assistant',
    leadershipTA1: 'Utilize Java, Python, C, and MIPS to teach computer science lab sessions to 80+ students',
    leadershipTA2: 'Mentor students working with M1 Finance on a project aiming to increase financial literacy',
    leadershipCyberHawks: 'CyberHawks Security | Publicity Chair & Head Webmaster',
    leadershipCyberHawks1: 'Manage marketing & website; placed 4th in team cyber defense competition',
    leadershipSGA: 'Student Government Association | Senator',
    leadershipSGA1: 'Pioneered projects such as providing free feminine hygiene products in all academic buildings',
    achievements: 'Achievements & Projects',
    achievement1: 'Camras Scholar, Awarded to less than 1% of students, & Dean’s List Recipient',
    achievement2: 'Team lead of Soteria, an emergency response system powered over ethernet',
    achievement3: 'Built Stock Assistant Java Android app using API, SQLite database, Multi-threads, & JSON data',
    achievement4: 'Earned English & Spanish Seal of Biliteracy in Reading, Writing, Listening, & Speaking ',
    achievement5: 'Awarded Guinness World Record for Pokémon competitive achievement',
  };
  hands = "assets/hands.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
