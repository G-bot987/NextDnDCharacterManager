import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { skillProFalse } from "../../../../../../../slices/skillSlice";

import { ReduxSkillInterface } from "../../../../../../../interfaces/componentInterfaces/skillInterfaces/skillInterfaces";

export default function Skill(Props: ReduxSkillInterface) {
  const { proficiency, skillName, attribute, mod } = Props;

  const dispatch = useDispatch();
  const [deselect, setDeselect] = useState(!proficiency);

  useEffect(() => {
    if (deselect === true) {
      const reduxPayLoad = { skillName, proficiency: false, attribute, mod };

      dispatch(skillProFalse(reduxPayLoad));
    }
  }, [deselect]);

  return (
    <li className=" w-full justify-center flex">
      <div className="flex justify-center text-center flex-row bg-white rounded-full text-black justify-between  w-[90%]">
        {skillName} {Props.attribute} {mod}
        <div
          className="bg-black border-2 border-solid rounded-r-full"
          onClick={() => setDeselect(!deselect)}
        >
          <p className="text-white">Remove Proficiency</p>
        </div>
      </div>
    </li>
  );
}
