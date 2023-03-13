import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { skillProFalse, skillProTrue, skillRootState } from "../../../../../../../slices/skillSlice";

interface SkillproficiencyInterface {
  skillName?: string;
  attribute: string;
  mod: number;
  proficiency: boolean
}

export default function Skillproficiency(Props: SkillproficiencyInterface) {

  const { skillName, mod, attribute } = Props;
  const store = useSelector(skillRootState);
  const dispatch = useDispatch();

  const inStore = store.find((element) => {
    return element.skillName === skillName;
  });

  const select = inStore?.proficiency || false;

  var [selected, setSelected] = useState(select);

  useEffect(() => {

    const skillProperty = { skillName, attribute, proficiency: selected, mod };

    if (selected) {

      dispatch(skillProTrue(skillProperty));
    } else {
      dispatch(skillProFalse(skillProperty))
    }

  }, [selected])

  useEffect(() => {
    if (!inStore.proficiency && selected) {
      setSelected(!selected)
    }
  }, [inStore])

  return (
    <div
      onClick={() => setSelected(!selected)}
      className="max-w-fit rounded-full border-2 border-white p-2 flex-col"
      style={{
        background: select ? "white" : "",
        color: select ? "black" : "",
        border: select ? "solid" : "",
      }}
    >
      <p>
        {skillName}
      </p>
      <p>
        {mod}
      </p>
    </div>
  );
}
