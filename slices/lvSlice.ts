import { RootState } from "../store";

import {
  ReduxScoreInterface,
  ReduxScoreProficiencyState,
} from "../interfaces/componentInterfaces/scoreInterfaces/score";

import { lvInterface } from "../interfaces/templateInterface";
import { ReduxLevelState } from "../interfaces/componentInterfaces/levelInterfaces/level";

const initialState: ReduxLevelState = {};

// actions

export const levelValue = (level: lvInterface) => {
  return {
    type: "LEVEL_VALUE",
    payload: level,
  };
};

export function levelReducer(state = initialState, action: any) {
  switch (action.type) {
    case "LEVEL_VALUE":
      return {
        ...state,
      };

    default:
      return state;
  }
}

export const levelRootState = (state: RootState) =>
  state.attributesReducer.attributesArray;
