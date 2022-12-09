import React from "react";

interface SkillproficiencyInterface {
  proficiency?: boolean | null | undefined;
  skillName?: string | null;
  attribute?: string;
}

export default function Skillproficiency(Props: SkillproficiencyInterface) {
  const { proficiency } = Props;
  return <div>Skillproficiency {proficiency}</div>;
}
