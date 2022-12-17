import React, { useState, useEffect } from "react";

import { ReduxLanguageInterface } from "../../../../../interfaces/componentInterfaces/languageInterfaces/reduxInterfaces/reduxInterfaces";

import { useDispatch } from "react-redux";
import { LanguageProFalse } from "../../../../../slices/languageSlice";

export default function Selectedlanguageproperty(
  Props: ReduxLanguageInterface
) {
  const { selected, property, dialect, language } = Props;

  const dispatch = useDispatch();
  const [deselect, setDeselect] = useState(!selected);

  useEffect(() => {
    if (deselect === true) {
      const reduxPayLoad = { property, selected: false, dialect, language };
      dispatch(LanguageProFalse(reduxPayLoad));
    }
  }, [deselect]);

  return (
    <div className="flex justify-center text-center flex-row bg-white rounded-lg">
      <div className="text-black">
        {property} {dialect} {language}
      </div>

      <div
        className="bg-black border-2 border-solid"
        onClick={() => setDeselect(!deselect)}
      >
        <p className="text-white">Remove Proficiency</p>
      </div>
    </div>
  );
}
