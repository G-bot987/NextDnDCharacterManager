import { RootState } from "../store";

import {
  ReduxSkillInterface,
  ReduxSkillProficiencyState,
} from "../interfaces/componentInterfaces/skillInterfaces/skillInterfaces";

const initialState: ReduxSkillProficiencyState = {
  skillArray: [],
};

// actions

export const skillProTrue = (skill: ReduxSkillInterface) => {
  return {
    type: "SKILL_PROFICIENCY_TRUE",
    payload: skill,
  };
};

export const skillProFalse = (skill: ReduxSkillInterface) => {
  return {
    type: "SKILL_PROFICIENCY_FALSE",
    payload: skill,
  };
};

export function skillPropertiesReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SKILL_PROFICIENCY_TRUE":
      const storeData = state.skillArray.filter(
        (skillProperty) => skillProperty.skillName !== action.payload.skillName
      );

      return {
        ...state,
        skillArray: [...storeData, action.payload],
      };

    case "SKILL_PROFICIENCY_FALSE":
      const storeDataFalse = state.skillArray.filter(
        (skillProperty) => skillProperty.skillName !== action.payload.skillName
      );

      return {
        ...state,
        skillArray: [...storeDataFalse, action.payload],
      };

    default:
      return state;
  }
}

export const attributesRootState = (state: RootState) =>
  state.skillPropertiesReducer.skillArray;
