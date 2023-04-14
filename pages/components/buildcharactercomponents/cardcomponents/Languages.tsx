import React, { useState } from "react";
import {
  languagesInterface,
  languageInterface,
} from "../../../../interfaces/dataInterfaces/templateInterface";

import styles from "../../../../styles/Home.module.css";
import Language from "./languagecomponents/Language";

export default function Languages(Props: languagesInterface) {
  const { ancestralgroup, variants } = Props;
  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-col space-y-4 min-w-[14%]">
      <div
        className="flex justify-around text-center flex-row"
        onClick={() => setShow(!show)}
      >
        <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
          <div
            className={styles.arrowdown}
            style={{
              transform: show ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          />
        </div>
        <div className="border-white border-2 rounded-full p-[4px] text-xs p-2">
          {ancestralgroup}
        </div>
        <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
          <div
            className={styles.arrowdown}
            style={{
              transform: show ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          />
        </div>
      </div>
      {show && (
        <ul className="flex flex-col justify-around  text-center  space-y-4">
          {variants.map((varient: languageInterface, index: number) => (
            <Language {...varient} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
}
