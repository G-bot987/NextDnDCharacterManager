import { RootState } from "../store";

export interface SkillProficiencyState {
  skillArray: skillInterface[];
}
export interface skillInterface {
  skill: string;
  proficiency?: boolean;
}
const initialState: SkillProficiencyState = {
  skillArray: [],
};

// actions

export const skillProTrue = (skill: any) => {
  return {
    type: "SKILL_PROFICIENCY_TRUE",
    payload: skill,
  };
};

export const skillProFalse = (skill: any) => {
  return {
    type: "SKILL_PROFICIENCY_FALSE",
    payload: skill,
  };
};

// reducers
export function skillPropertiesReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SKILL_PROFICIENCY_TRUE":
      const storeData = state.skillArray.filter(
        (skillProperty) => skillProperty.skill !== action.payload.skill
      );

      return {
        ...state,
        skillArray: [...storeData, action.payload],
      };

    case "SKILL_PROFICIENCY_FALSE":
      const storeDataFalse = state.skillArray.filter(
        (skillProperty) => skillProperty.skill !== action.payload.skill
      );

      return {
        ...state,
        skillArray: [...storeDataFalse, action.payload],
      };

    default:
      return state;
  }
}

export const rootState = (state: RootState) =>
  state.skillPropertiesReducer.skillArray;
