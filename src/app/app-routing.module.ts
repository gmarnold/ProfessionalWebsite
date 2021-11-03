import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PageComponent, data: {
    page: 'home'
  }},
  {path: 'resume', component: ResumeComponent, data: {
    page: 'resume'
  }},
  {path: 'contact', component: ContactComponent, data: {
    page: 'contact'
  }},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
