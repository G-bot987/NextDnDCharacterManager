import { RootState } from "../store";

import {
  ReduxScoreInterface,
  ReduxScoreProficiencyState,
} from "../interfaces/componentInterfaces/scoreInterfaces/score";

const initialState: ReduxScoreProficiencyState = {
  attributesArray: [],
};

// actions

export const attributeValue = (attribute: ReduxScoreInterface) => {
  return {
    type: "ATTRIBUTE_VALUE",
    payload: attribute,
  };
};

export function attributesReducer(state = initialState, action: any) {
  switch (action.type) {
    case "ATTRIBUTE_VALUE":
      const storeData = state.attributesArray.filter(
        (attributeScore) =>
          attributeScore.attribute !== action.payload.attribute
      );

      return {
        ...state,
        attributesArray: [...storeData, action.payload],
      };

    default:
      return state;
  }
}

export const attributesRootState = (state: RootState) =>
  state.attributesReducer.attributesArray;
