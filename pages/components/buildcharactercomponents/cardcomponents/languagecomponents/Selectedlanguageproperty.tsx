import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { LanguageProFalse } from "../../../../../slices/languageSlice";

interface PropsInterface {
  value: string;
  selected: boolean;
}

export default function Selectedlanguageproperty(Props: PropsInterface) {
  const { value, selected } = Props;
  const dispatch = useDispatch();

  const [deselect, setDeselect] = useState(false);

  useEffect(() => {
    if (deselect === true) {
      console.log("pre dispatch", Props);
      const property = { value, selected: false };
      dispatch(LanguageProFalse(property));
    }
  }, [deselect]);

  return (
    <div className="flex justify-center text-center flex-row bg-white rounded-lg">
      <div className="text-black">{value}</div>

      <div
        className="bg-black border-2 border-solid"
        onClick={() => setDeselect(!deselect)}
      >
        <p className="text-white">Remove Proficiency</p>
      </div>
    </div>
  );
}
