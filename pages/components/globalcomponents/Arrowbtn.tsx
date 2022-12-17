import React, { useState } from "react";

import styles from "../../../styles/Home.module.css";
import Attribute from "../buildcharactercomponents/cardcomponents/Attribute";
import Languages from "../buildcharactercomponents/cardcomponents/Languages";
import Selectedlanguageproperties from "../buildcharactercomponents/cardcomponents/languagecomponents/Selectedlanguageproperties";

import { useSelector } from "react-redux";
import { rootState } from "../../../slices/languageSlice";
import Myskills from "../buildcharactercomponents/cardcomponents/attributecomponents/skillcomponents/Myskills";

export default function ArrowBtn(Props: any) {
  const { attributes, languages } = Props;
  const store = useSelector(rootState);
  const cardValue = Object.keys(Props);
  const silderTitle = cardValue[0];

  const hasSelectedLanguageProperties = store.filter(
    (selectedVals) => selectedVals.selected === true
  );

  const SelectedSkillProperties = store.filter(
    (selectedVals) => selectedVals.selected === true
  );

  const [show, setShow] = useState(false);

  return (
    <div className="min-w-full flex flex flex-row inline-flex ">
      <p
        style={{
          display: show ? "none" : "",
        }}
      >
        {silderTitle}
      </p>
      <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
        <div
          className={`${styles.arrowright}`}
          style={{
            transform: show ? "rotate(130deg)" : "",
            transition: "transform 150ms ease",
            margin: show ? "0.3rem 0 0 0.4rem" : "",
          }}
          onClick={() => setShow(!show)}
        />
      </div>
      {show && attributes && (
        <ul className="min-h-min flex flex-row justify-around min-w-full min-w-min grow ">
          {SelectedSkillProperties.length > 1000 && <Myskills />}
          {Object.keys(attributes).map((attribute: string, index: number) => (
            <Attribute {...attributes[attribute]} key={`${index}`} />
          ))}
        </ul>
      )}

      {show && languages && (
        <ul className="min-h-min flex flex-row justify-around   min-w-min grow ">
          {hasSelectedLanguageProperties.length > 0 && (
            <Selectedlanguageproperties {...hasSelectedLanguageProperties} />
          )}
          {Object.keys(languages).map((language: string, index: number) => (
            <Languages {...languages[language]} key={`${index}`} />
          ))}
        </ul>
      )}
    </div>
  );
}
