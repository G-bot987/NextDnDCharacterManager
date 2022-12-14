import React from "react";

interface SkillproficiencyInterface {
  proficiency?: boolean | undefined | null;
  skillName?: string | null;
  attribute?: string;
}

export default function Skillproficiency(Props: SkillproficiencyInterface) {
  const { proficiency } = Props;
  return <div>Skillproficiency {proficiency}</div>;
}
