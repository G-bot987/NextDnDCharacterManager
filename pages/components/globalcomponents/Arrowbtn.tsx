import React, { useState } from "react";

import styles from "../../../styles/Home.module.css";

import Attribute from "../buildcharactercomponents/cardcomponents/Attribute";
import Languages from "../buildcharactercomponents/cardcomponents/Languages";
import Selectedlanguageproperties from "../buildcharactercomponents/cardcomponents/languagecomponents/mylanguageproperties/Selectedlanguageproperties";
import Myskills from "../buildcharactercomponents/cardcomponents/attributecomponents/skillcomponents/myskills/Myskills";

import { useSelector } from "react-redux";
import { rootState } from "../../../slices/languageSlice";
import { skillRootState } from "../../../slices/skillSlice";
import { itemDataInterface } from "../../../interfaces/dataInterfaces/itemsDataInterface";
import Items from "../buildcharactercomponents/cardcomponents/Items";

export default function ArrowBtn(Props: any) {
  const { attributes, languageData, items } = Props;

  const store = useSelector(rootState);
  const skillRootStore = useSelector(skillRootState);
  const cardValue = Object.keys(Props);
  const silderTitle = cardValue[0];

  const hasSelectedLanguageProperties = store.filter(
    (selectedVals) => selectedVals.selected === true
  );

  const selectedSkillProperties = skillRootStore.filter(
    (selectedVals) => selectedVals.proficiency === true
  );

  const [show, setShow] = useState(false);

  return (
    <div className="min-w-full flex flex flex-row inline-flex ">
      <div className=" bg-white flex inline flex border-solid border-black rounded-full text-black p-3 max-h-12">
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
      </div>
      {show && attributes && (
        <ul className="min-h-min flex flex-row justify-around min-w-full min-w-min grow ">
          {selectedSkillProperties.length > 0 && (
            <Myskills {...selectedSkillProperties} />
          )}
          {Object.keys(attributes).map((attribute: string, index: number) => (
            <Attribute {...attributes[attribute]} key={`${index}`} />
          ))}
        </ul>
      )}

      {show && languageData && (
        <ul className="min-h-min flex flex-row justify-around   min-w-min grow ">
          {hasSelectedLanguageProperties.length > 0 && (
            <Selectedlanguageproperties {...hasSelectedLanguageProperties} />
          )}
          {Object.keys(languageData).map((language: string, index: number) => (
            <Languages {...languageData[language]} key={`${index}`} />
          ))}
        </ul>
      )}

      {show && items && (
        <ul className="min-h-min flex flex-row justify-around   min-w-min grow ">
          {items.map((item: itemDataInterface, index: number) => (
            <Items {...item} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
}
