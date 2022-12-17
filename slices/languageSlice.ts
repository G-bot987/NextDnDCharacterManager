import { ReduxLanguageInterface } from "../interfaces/componentInterfaces/languageInterfaces/reduxInterfaces/reduxInterfaces";
import { RootState } from "../store";

export interface LanguageProficiencyState {
  languagesArray: ReduxLanguageInterface[];
}
const initialState: LanguageProficiencyState = {
  languagesArray: [],
};

// actions

export const LanguageProTrue = (language: ReduxLanguageInterface) => {
  return {
    type: "LANGUAGE_PROFICIENCY_TRUE",
    payload: language,
  };
};

export const LanguageProFalse = (language: ReduxLanguageInterface) => {
  return {
    type: "LANGUAGE_PROFICIENCY_FALSE",
    payload: language,
  };
};

// reducers
export function languagePropertiesReducer(state = initialState, action: any) {
  switch (action.type) {
    case "LANGUAGE_PROFICIENCY_TRUE":
      const storeData = state.languagesArray.filter(
        (languageProperty) =>
          languageProperty.property !== action.payload.property ||
          languageProperty.dialect !== action.payload.dialect
      );
      return {
        ...state,
        languagesArray: [...storeData, action.payload],
      };
    case "LANGUAGE_PROFICIENCY_FALSE":
      const storeDataFalse = state.languagesArray.filter(
        (languageProperty) =>
          languageProperty.property !== action.payload.property ||
          languageProperty.dialect !== action.payload.dialect
      );
      return {
        ...state,
        languagesArray: [...storeDataFalse, action.payload],
      };
    default:
      return state;
  }
}

export const rootState = (state: RootState) =>
  state.languagePropertiesReducer.languagesArray;
