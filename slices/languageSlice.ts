import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface LanguageProficiencyState {
  languagesArray: languageInterface[];
}
export interface languageInterface {
  languageProperty: string;
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
      console.log("inside switch", action.payload);
      return {
        ...state,
        languagesArray: [...state.languagesArray, action.payload],
      };

    case "DELETE_LANGUAGE_PROFICIENCY":
      console.log("inside del");
      return {
        ...state,
        languageProData: { ...state.languagesArray, ...action.payload },
      };

    default:
      return state;
  }
}

// var state = {};
// state = languagePropertiesReducer(undefined, {
//   type: "ADD_LANGUAGE_PROFICIENCY",
//   payload: { React: { name: "React", quantity: 1 } },
// });

// Action creators are generated for each case reducer function

export const rootState = (state: RootState) =>
  state.languagePropertiesReducer.languagesArray;
