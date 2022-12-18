import React from "react";

interface SkillproficiencyInterface {
  select: boolean;
  skillName?: string | null;
  attribute?: string;
}

export default function Skillproficiency(Props: SkillproficiencyInterface) {
  const { select, skillName } = Props;
  return (
    <div
      className="max-w-fit rounded-lg "
      style={{
        background: select ? "black" : "",
        color: select ? "white" : "",
      }}
    >
      {skillName}
    </div>
  );
}
