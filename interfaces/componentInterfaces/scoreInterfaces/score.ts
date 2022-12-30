export interface ScoreInterface {
  value: number;
  selected: null | boolean;
  mod: number;
}

export interface ReduxScoreInterface {
  score: number;
  attribute: string;
}

export interface ReduxScoreProficiencyState {
  attributesArray: ReduxScoreInterface[];
}
