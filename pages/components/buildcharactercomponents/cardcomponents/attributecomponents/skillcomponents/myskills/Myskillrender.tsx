import React from "react";

import { ReduxSkillInterface } from "../../../../../../../interfaces/componentInterfaces/skillInterfaces/skillInterfaces";

export default function Skill(Props: ReduxSkillInterface) {
  return (
    <div className="text-white">
      {Props.skillName} {Props.attribute}
    </div>
  );
}
