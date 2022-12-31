import React from "react";

interface SkillproficiencyInterface {
  select: boolean;
  skillName?: string | null;
  attribute?: string;
  mod: number;
}

export default function Skillproficiency(Props: SkillproficiencyInterface) {
  const { select, skillName, mod } = Props;
  return (
    <div
      className="max-w-fit rounded-full border-2 border-white p-2"
      style={{
        background: select ? "white" : "",
        color: select ? "black" : "",
        border: select ? "solid" : "",
      }}
    >
      {skillName}

      {mod}
    </div>
  );
}
