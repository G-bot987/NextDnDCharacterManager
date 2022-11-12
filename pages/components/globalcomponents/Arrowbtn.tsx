import React, { useState } from "react";

import styles from "../../../styles/Home.module.css";
import Attribute from "../buildcharactercomponents/cardcomponents/Attribute";
import Language from "../buildcharactercomponents/cardcomponents/Language";

export default function ArrowBtn(Props: any) {
  const { attributes, languages } = Props;

  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
        <div
          className={`${styles.attributearrow}`}
          style={{
            transform: show ? "rotate(130deg)" : "",
            transition: "transform 150ms ease",
            margin: show ? "0.3rem 0 0 0.4rem" : "",
          }}
          onClick={() => setShow(!show)}
        />
      </div>
      {show && attributes && (
        <ul className="min-h-min flex flex-row justify-around">
          {Object.keys(attributes).map((attribute: any, index: number) => (
            <Attribute {...attributes[attribute]} key={`${index}`} />
          ))}
        </ul>
      )}

      {show && languages && (
        <ul className="min-h-min flex flex-row justify-around">
          {Object.keys(languages).map((language: any, index: number) => (
            <Language {...languages[language]} key={`${index}`} />
          ))}
        </ul>
      )}
    </div>
  );
}
