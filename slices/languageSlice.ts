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

export const LanguageProTrue = (language: languageInterface) => {
  return {
    type: "LANGUAGE_PROFICIENCY_TRUE",
    payload: language,
  };
};

export const LanguageProFalse = (language: languageInterface) => {
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
        (languageProperty) => languageProperty.value !== action.payload.value
      );
      return {
        ...state,
        languagesArray: [...storeData, action.payload],
      };
    case "LANGUAGE_PROFICIENCY_FALSE":
      const storeDataFalse = state.languagesArray.filter(
        (languageProperty) => languageProperty.value !== action.payload.value
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
