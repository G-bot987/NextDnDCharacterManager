export interface ReduxSkillInterface {
  skillName?: string;
  attribute: string;
  proficiency: boolean;
  mod: number;
}

export interface ReduxSkillProficiencyState {
  skillArray: ReduxSkillInterface[];
}
