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

const removeLanguagePro = () => {
  return {
    type: "REMOVE_LANGUAGE_PROFICIENCY",
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
        console.log("does not exists so adding");
        return {
          ...state,
          languagesArray: [...state.languagesArray, action.payload],
        };
      } else {
        return {
          languagesArray: [
            ...state.languagesArray.filter((x) => x !== action.payload),
          ],
        };
      }

    default:
      return state;
  }
}

export const rootState = (state: RootState) =>
  state.languagePropertiesReducer.languagesArray;
