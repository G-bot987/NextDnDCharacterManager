import React from "react";

import { ScoreInterface } from "../../../../../../interfaces/componentInterfaces/scoreInterfaces/score";

export default function ScoreRender(Props: ScoreInterface) {
  const { value, mod } = Props;
  return (
    <div className="flex flex-col justify-between align-center">
      <div>{value}</div>

      <div>{mod}</div>
    </div>
  );
}
