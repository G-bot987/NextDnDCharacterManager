import React, { useState, useEffect } from "react";
import Skillproficiency from "./Skillproficiency";

import { useSelector, useDispatch } from "react-redux";

import {
  skillRootState,
  skillProTrue,
  skillProFalse,
} from "../../../../../../../slices/skillSlice";
import { attributesRootState } from "../../../../../../../slices/attributesSlice";
import { levelRootState } from "../../../../../../../slices/lvSlice";

import { ReduxSkillInterface } from "../../../../../../../interfaces/componentInterfaces/skillInterfaces/skillInterfaces";

interface SKillsInterface {
  skill: string;
  proficiency: null | boolean;
}

interface PropsInterface {
  attribute: string;
  skill?: SKillsInterface;
}

export default function Skills(Props: PropsInterface) {
  const { attribute } = Props;

  const skillName = Props.skill?.skill;

  const store = useSelector(skillRootState);
  const attributesStore = useSelector(attributesRootState);
  const lvStore = useSelector(levelRootState);
  const dispatch = useDispatch();

  const attributeMod = attributesStore.find((element) => {
    return element.attribute === attribute;
  });

  var mod = (() => {
    if (attributeMod) {
      return attributeMod.score.mod;
    } else {
      return "an error occured";
    }
  })();

  const inStore = store.find((element) => {
    return element.skillName === skillName;
  });

  var skillState = (() => {
    if (inStore === undefined) {
      return false;
    } else {
      return inStore.proficiency;
    }
  })();

  var [select, setSelect] = useState(skillState);

  if (skillState === true) {
    mod = +mod + +lvStore[0].proBonus;
  }

  useEffect(() => {
    const skillProperty = { skillName, attribute, proficiency: select, mod };

    if (select === true) {
      dispatch(skillProTrue(skillProperty));
    } else {
      dispatch(skillProFalse(skillProperty));
    }
  }, [select, lvStore, attributesStore, mod, skillState]);

  return (
    <li
      className=" max-w-full flex justify-center"
      onClick={() => setSelect(!select)}
    >
      <div className="flex justify-center flex flex-col bg-black text-white rounded-full max-w-[50%] ">
        <Skillproficiency
          {...{
            select: select,
            skillName,
            attribute,
            mod,
            setSelect,
          }}
        />
      </div>
    </li>
  );
}
