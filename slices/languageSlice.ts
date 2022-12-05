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

export const addLanguagePro = (test: any) => ({
  type: "ADD_LANGUAGE_PROFICIENCY",
  payload: test,
});

export const LanguageProTrue = (test: any) => {
  return {
    type: "LANGUAGE_PROFICIENCY_TRUE",
    payload: test,
  };
};

export const LanguageProFalse = (test: any) => {
  return {
    type: "LANGUAGE_PROFICIENCY_FALSE",
    payload: test,
  };
};

// reducers
export function languagePropertiesReducer(state = initialState, action: any) {
  switch (action.type) {
    case "ADD_LANGUAGE_PROFICIENCY":
      const { value, selected } = action.payload;
      const { languagesArray } = state;
      const languageProperty = languagesArray.find(
        (languageProperty) => languageProperty.value === value
      );
      if (languageProperty === undefined) {
        return {
          ...state,
          languagesArray: [...state.languagesArray, action.payload],
        };
      } else {
      }
    case "LANGUAGE_PROFICIENCY_TRUE":
      const storeData = state.languagesArray.filter(
        (languageProperty) => languageProperty.value !== action.payload.value
      );
      return {
        ...state,
        languagesArray: [...storeData, action.payload],
      };
    case "LANGUAGE_PROFICIENCY_FALSE":
    // console.log("action.type "), console.log(action.type);
    // console.log("---");
    // console.log("lang pro false ");
    // console.log(action.payload);
    // console.log("000");
    default:
      return state;
  }
}

export const rootState = (state: RootState) =>
  state.languagePropertiesReducer.languagesArray;
