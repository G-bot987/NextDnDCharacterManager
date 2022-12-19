export interface ScoreInterface {
  value: number;
  selected: null | boolean;
}

export interface ReduxScoreInterface {
  score: number;
  attribute: string;
}

export interface ReduxScoreProficiencyState {
  attributesArray: ReduxScoreInterface[];
}
