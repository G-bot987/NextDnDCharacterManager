import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { skillProFalse } from "../../../../../../../slices/skillSlice";

import { ReduxSkillInterface } from "../../../../../../../interfaces/componentInterfaces/skillInterfaces/skillInterfaces";

export default function Skill(Props: ReduxSkillInterface) {
  const { proficiency, skillName, attribute } = Props;

  const dispatch = useDispatch();
  const [deselect, setDeselect] = useState(!proficiency);

  useEffect(() => {
    if (deselect === true) {
      const reduxPayLoad = { skillName, proficiency: false, attribute };
      dispatch(skillProFalse(reduxPayLoad));
    }
  }, [deselect]);

  return (
    <li className="flex justify-center text-center flex-row bg-white rounded-lg text-black">
      {Props.skillName} {Props.attribute}
      <div
        className="bg-black border-2 border-solid"
        onClick={() => setDeselect(!deselect)}
      >
        <p className="text-white">Remove Proficiency</p>
      </div>
    </li>
  );
}
