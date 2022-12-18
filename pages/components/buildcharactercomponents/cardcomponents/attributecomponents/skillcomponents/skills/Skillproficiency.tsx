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
      style={{
        background: select ? "purple" : "",
      }}
    >
      {skillName}
    </div>
  );
}
