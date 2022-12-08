import React from "react";
import { skillInterface } from "../../../../../../interfaces/templateInterface";

export default function Skills(Props: any) {
  const { skill } = Props;
  var { proficiency } = Props;

  const skillName = skill.skill;
  return (
    <li className="flex flex-col">
      <p>{skillName}</p>
    </li>
  );
}
