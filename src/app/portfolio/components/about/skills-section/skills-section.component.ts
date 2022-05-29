import { Component, OnInit } from '@angular/core';
import { Skill, SkillDetail } from '../../../interfaces/about/skill.interface';
import { SkillsService } from '../../../services/skills.service';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent implements OnInit {
  skills: Skill[] = [];
  skillsDetails: SkillDetail[] = [];
  constructor(private _skillsService: SkillsService) {
    this.skills = this._skillsService.skills;
  }

  ngOnInit(): void {}
}
