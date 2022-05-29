import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { HeaderIntroSectionComponent } from './components/about/header-intro-section/header-intro-section.component';
import { SkillsSectionComponent } from './components/about/skills-section/skills-section.component';
import { ClientsReferencesSectionComponent } from './components/about/clients-references-section/clients-references-section.component';
import { ContactSectionComponent } from './components/about/contact-section/contact-section.component';

@NgModule({
  declarations: [
    AboutComponent,
    HeaderIntroSectionComponent,
    SkillsSectionComponent,
    ClientsReferencesSectionComponent,
    ContactSectionComponent,
  ],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
