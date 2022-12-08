import React, { useState, useEffect } from "react";
import { skillInterface } from "../../../../../../interfaces/templateInterface";
import Skillproficiency from "./Skillproficiency";

interface SKillsInterface {
  skill: string;
  proficiency: null | boolean;
}

interface PropsInterface {
  attribute: string;
  skill?: SKillsInterface;
}

export default function Skills(Props: PropsInterface) {
  const skillName = Props.skill?.skill;
  var proficiency = Props.skill?.proficiency;

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
