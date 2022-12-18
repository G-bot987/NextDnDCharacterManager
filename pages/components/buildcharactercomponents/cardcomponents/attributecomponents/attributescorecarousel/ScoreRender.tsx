import React from "react";

import { ScoreInterface } from "../../../../../../interfaces/componentInterfaces/scoreInterfaces/score";

export default function ScoreRender(Props: ScoreInterface) {
  const { value } = Props;
  return <div>Card score value in score render {value}</div>;
}
