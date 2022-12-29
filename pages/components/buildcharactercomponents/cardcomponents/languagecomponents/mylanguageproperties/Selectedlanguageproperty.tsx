import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { LanguageProFalse } from "../../../../../../slices/languageSlice";

import { ReduxLanguageInterface } from "../../../../../../interfaces/componentInterfaces/languageInterfaces/reduxInterfaces/reduxInterfaces";

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
      {dialect === language && (
        <div className="text-black">
          {property} {language}
        </div>
      )}
      {dialect !== language && (
        <div className="text-black">
          {property} {language} {dialect}
        </div>
      )}

      <div
        className="bg-black border-2 border-solid rounded-r-lg"
        onClick={() => setDeselect(!deselect)}
      >
        <p className="text-white">Remove Proficiency</p>
      </div>
    </div>
  );
}
