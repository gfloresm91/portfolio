import { Injectable } from '@angular/core';
import { Skill, SkillDetail } from '../interfaces/about/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skillsDetails: SkillDetail[] = [
    {
      id: 1,
      idSkill: 1,
      icon: 'assets/images/frontend-icon.svg',
      title: 'Frontend',
      items: [
        { id: 1, idSkillDetail: 1, item: 'Typescript' },
        { id: 2, idSkillDetail: 1, item: 'Javascript' },
        { id: 3, idSkillDetail: 1, item: 'Angular' },
        { id: 4, idSkillDetail: 1, item: 'HTML/CSS' },
        { id: 5, idSkillDetail: 1, item: 'Bootstrap' },
        { id: 6, idSkillDetail: 1, item: 'Jquery' },
      ],
    },
    {
      id: 2,
      idSkill: 1,
      icon: 'assets/images/backend-icon.svg',
      title: 'Backend',
      items: [
        { id: 6, idSkillDetail: 2, item: 'PHP' },
        { id: 6, idSkillDetail: 2, item: 'Docker' },
        { id: 6, idSkillDetail: 2, item: 'Laravel' },
        { id: 6, idSkillDetail: 2, item: 'Laravel packages' },
        { id: 6, idSkillDetail: 2, item: 'Codeigniter' },
        { id: 6, idSkillDetail: 2, item: 'MySql' },
      ],
    },
    {
      id: 4,
      idSkill: 1,
      icon: 'assets/images/other-skills-icon.svg',
      title: 'Otros',
      items: [
        { id: 6, idSkillDetail: 2, item: 'Git/GitHub/GitLab/BitBucket' },
        { id: 6, idSkillDetail: 2, item: 'API Rest' },
        { id: 6, idSkillDetail: 2, item: 'DigitalOcean' },
        { id: 6, idSkillDetail: 2, item: 'Google APIs' },
        { id: 6, idSkillDetail: 2, item: 'SSH' },
        { id: 6, idSkillDetail: 2, item: 'SQLMap' },
        { id: 6, idSkillDetail: 2, item: 'Algolia search' },
        { id: 6, idSkillDetail: 2, item: 'GNU/Linux' },
      ],
    },
  ];

  skills: Skill[] = [
    {
      id: 1,
      description: `
        Tengo más de 5 años de experiencia construyendo aplicaciones webs para
        diferentes empresas de la región. A continuación puede dar un vistazo
        rápido a mis habilidades técnicas y herramientas que he utilizado.
      `,
      skillsDetails: this.skillsDetails,
    },
  ];

  constructor() {}
}
