import React, { useState, useEffect, useRef } from "react";
import Skillproficiency from "./Skillproficiency";

import { useSelector, useDispatch } from "react-redux";

import {
  rootState,
  skillProTrue,
  skillProFalse,
} from "../../../../../../slices/skillSlice";

interface SKillsInterface {
  skill: string;
  proficiency: null | boolean;
}

interface PropsInterface {
  attribute: string;
  skill?: SKillsInterface;
}

export default function Skills(Props: PropsInterface) {
  const store = useSelector(rootState);

  const { attribute } = Props;
  const skillName = Props.skill?.skill;
  var proficiency = Props.skill?.proficiency;
  const dispatch = useDispatch();

  if (proficiency === null) {
    proficiency = false;
  }

  const [select, setSelect] = useState(false);

  useEffect(() => {
    if (select === true) {
      proficiency = true;
    } else {
      proficiency = false;
    }
    console.log(skillName, proficiency);
  });

  return (
    <li className="flex flex-col" onClick={() => setSelect(!select)}>
      <p>{skillName}</p>
      <Skillproficiency {...{ proficiency, skillName, attribute }} />
    </li>
  );
}
