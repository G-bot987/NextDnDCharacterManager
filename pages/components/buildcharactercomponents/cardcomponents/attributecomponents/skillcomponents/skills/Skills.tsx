import React, { useState, useEffect } from "react";
import Skillproficiency from "./Skillproficiency";

import { useSelector, useDispatch } from "react-redux";

import {
  skillRootState,
  skillProTrue,
  skillProFalse,
} from "../../../../../../../slices/skillSlice";

import { attributesRootState } from "../../../../../../../slices/attributesSlice";

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
  const dispatch = useDispatch();

  const attributeMod = attributesStore.find((element) => {
    return element.attribute === attribute;
  });

  const mod = (() => {
    if (attribute) {
      return attributeMod.score.mod;
    } else {
      return "an error occured";
    }
  })();

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
    <li
      className=" max-w-full flex justify-center"
      onClick={() => setSelect(!select)}
    >
      <div className="flex justify-center flex flex-col bg-black text-white rounded-full max-w-[50%] ">
        <Skillproficiency
          {...{ select: inStore?.proficiency, skillName, attribute, mod }}
        />
      </div>
    </li>
  );
}
