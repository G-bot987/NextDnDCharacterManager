import React, { useState } from "react";
import styles from "../../../../../../../styles/Home.module.css";

import { ReduxSkillInterface } from "../../../../../../../interfaces/componentInterfaces/skillInterfaces/skillInterfaces";

import Myskillsrender from "../myskills/Myskillrender";

export default function Myskills(Props: ReduxSkillInterface[]) {
  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-col space-y-4 min-w-[14%]">
      <div
        className="flex justify-center text-center flex-row justify-between px-1"
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
        <div className="border-white border-2 rounded-full">
          My Skill Proficiencies
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
        <ul className="flex flex-col justify-center  text-center  space-y-4">
          {Object.keys(Props).map((property: any, index: number) => (
            <Myskillsrender {...Props[property]} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
}
