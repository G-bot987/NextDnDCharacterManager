export interface ReduxSkillInterface {
  skillName?: string;
  attribute: string;
  proficiency: boolean;
}

export interface ReduxSkillProficiencyState {
  skillArray: ReduxSkillInterface[];
}
