import { RootState } from "../store";

export interface LanguageProficiencyState {
  languagesArray: languageInterface[];
}
export interface languageInterface {
  value: string;
  selected?: boolean;
}
const initialState: LanguageProficiencyState = {
  languagesArray: [],
};

// actions

export const attributeValue = (attribute: any) => {
  return {
    type: "ATTRIBUTE_VALUE",
    payload: attribute,
  };
};

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
export function languagePropertiesReducer(state = initialState, action: any) {
  switch (action.type) {
    case "ATTRIBUTE_VALUE":

    case "SKILL_PROFICIENCY_TRUE":

    case "SKILL_PROFICIENCY_FALSE":

    default:
      return state;
  }
}

export const rootState = (state: RootState) =>
  state.languagePropertiesReducer.languagesArray;
