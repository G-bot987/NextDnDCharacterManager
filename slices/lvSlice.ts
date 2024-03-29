import { RootState } from "../store";

import { lvInterface } from "../interfaces/dataInterfaces/templateInterface";
import { ReduxLevelState } from "../interfaces/componentInterfaces/levelInterfaces/level";

const initialState: ReduxLevelState = {
  lvArray: [],
};

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
        lvArray: [action.payload],
      };

    default:
      return state;
  }
}

export const levelRootState = (state: RootState) => state.levelReducer.lvArray;
