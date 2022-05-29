export interface Skill {
  id: number;
  description: string;
  skillsDetails: SkillDetail[];
}

export interface SkillDetail {
  id: number;
  idSkill: number;
  icon: string;
  title: string;
  items: SkillItem[];
}

export interface SkillItem {
  id: number;
  idSkillDetail: number;
  item: string;
}
