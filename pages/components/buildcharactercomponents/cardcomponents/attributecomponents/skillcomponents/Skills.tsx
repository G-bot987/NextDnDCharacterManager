import React, { useState, useEffect } from "react";
import { skillInterface } from "../../../../../../interfaces/templateInterface";
import Skillproficiency from "./Skillproficiency";

export default function Skills(Props: any) {
  const { skill } = Props;
  var { proficiency } = Props;

  const skillName = skill.skill;
  const [select, setSelect] = useState(false);

  useEffect(() => {
    if (select === true) {
      proficiency = true;
    } else {
      proficiency = false;
    }
  });

  return (
    <li className="flex flex-col" onClick={() => setSelect(!select)}>
      <p>{skillName}</p>
      <Skillproficiency />
    </li>
  );
}
