import React, { useState } from "react";
import styles from "../../../../../../styles/Home.module.css";

import { ReduxLanguageInterface } from "../../../../../../interfaces/componentInterfaces/languageInterfaces/reduxInterfaces/reduxInterfaces";

import Selectedlanguageproperty from "./Selectedlanguageproperty";

export default function Selectedlanguageproperties(
  Props: ReduxLanguageInterface[]
) {
  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-col space-y-4 min-w-[14%] items-center px-1">
      <div
        className="flex justify-between text-center flex-row min-w-full"
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
        <div className="border-white border-2 rounded-full p-1">Selected</div>
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
        <ul className="flex flex-col justify-around text-center max-w-[80%] max-w-min space-y-4">
          {Object.keys(Props).map((property: any, index: number) => (
            <Selectedlanguageproperty {...Props[property]} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
}
