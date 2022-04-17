import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{path: 'about', component:AboutComponent, data: { animation: 'isRight' }},
                        {path: 'skills', component:SkillsComponent, data: { animation: 'isLeft' }},
                        {path: 'portfolio', component:PortfolioComponent, data: { animation: 'isRight' }},
                        {path: 'contact', component:ContactComponent, data: { animation: 'isLeft' }},
                        {path: '', component:AboutComponent, data: { animation: 'isRight' }}];
                        
                        


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }