import React, { useState, useEffect } from "react";
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

  const skill = skillName + attribute;

  // const skill = `${skillName} ${attribute}`;
  const inStore = store.find((element) => {
    return element.skill === skill;
  });

  const skillState = (() => {
    if (inStore === undefined) {
      return false;
    } else {
      return inStore.proficiency;
    }
  })();

  const [select, setSelect] = useState(skillState);
  console.log("select");
  console.log(select);
  console.log("---");

  useEffect(() => {
    const skill = skillName + attribute;
    const skillProperty = { skill, proficiency: select };

    const inStore = store.find((element) => {
      return element.skill === skillProperty.skill;
    });

    if (inStore) {
      if (inStore.proficiency === select) {
        return console.log("catch");
      }
    }

    if (select === true) {
      dispatch(skillProTrue(skillProperty));
    } else {
      console.log("entering false");
      dispatch(skillProFalse(skillProperty));
    }
  }, [select]);

  return (
    <li className="flex flex-col" onClick={() => setSelect(!select)}>
      <p>{skillName}</p>
      <Skillproficiency {...{ select, skillName, attribute }} />
    </li>
  );
}
