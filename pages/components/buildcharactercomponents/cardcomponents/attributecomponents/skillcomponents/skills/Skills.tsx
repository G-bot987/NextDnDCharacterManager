import React, { useState, useEffect } from "react";
import Skillproficiency from "./Skillproficiency";

import { useSelector, useDispatch } from "react-redux";

import {
  attributesRootState,
  skillProTrue,
  skillProFalse,
} from "../../../../../../../slices/skillSlice";

interface SKillsInterface {
  skill: string;
  proficiency: null | boolean;
}

interface PropsInterface {
  attribute: string;
  skill?: SKillsInterface;
}

export default function Skills(Props: PropsInterface) {
  const store = useSelector(attributesRootState);

  const { attribute } = Props;
  const skillName = Props.skill?.skill;
  const dispatch = useDispatch();

  // const skill = `${skillName} ${attribute}`;
  const inStore = store.find((element) => {
    return element.skillName === skillName;
  });

  const skillState = (() => {
    if (inStore === undefined) {
      return false;
    } else {
      return inStore.proficiency;
    }
  })();

  const [select, setSelect] = useState(skillState);

  useEffect(() => {
    const skillProperty = { skillName, attribute, proficiency: select };

    const inStore = store.find((element) => {
      return element.skillName === skillName;
    });

    if (inStore) {
      if (inStore.proficiency === select) {
        return console.log("catch");
      }
    }

    if (select === true) {
      dispatch(skillProTrue(skillProperty));
    } else {
      dispatch(skillProFalse(skillProperty));
    }
  }, [select]);

  return (
    <li className="flex flex-col" onClick={() => setSelect(!select)}>
      <Skillproficiency
        {...{ select: inStore?.proficiency, skillName, attribute }}
      />
    </li>
  );
}
