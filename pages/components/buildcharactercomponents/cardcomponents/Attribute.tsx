import React, { useState } from "react";

import styles from "../../../../styles/Home.module.css";

import {
  attributesInterface,
  skillInterface,
} from "../../../../interfaces/templateInterface";
import Skills from "./attributecomponents/skillcomponents/skills/Skills";
import Attributevalue from "./attributecomponents/attributescorecarousel/Attributevalue";

export default function Attribute(Props: attributesInterface) {
  const { attribute, score, skills } = Props;

  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-col space-y-4 min-w-[14%] ">
      <div className="flex  text-center flex-row min-w-full justify-between px-1">
        <div onClick={() => setShow(!show)}>
          {skills && (
            <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
              <div
                className={styles.arrowdown}
                style={{
                  transform: show ? "rotate(225deg)" : "",
                  transition: "transform 150ms ease",
                }}
              />
            </div>
          )}
        </div>
        <div className="border-solid border-white border-2 rounded-lg flex-col p-3 min-w-[50%]">
          {attribute}
          <Attributevalue {...{ score, attribute }} />
        </div>
        <div onClick={() => setShow(!show)}>
          {skills && (
            <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
              <div
                className={styles.arrowdown}
                style={{
                  transform: show ? "rotate(225deg)" : "",
                  transition: "transform 150ms ease",
                }}
              />
            </div>
          )}
        </div>
      </div>
      {show && skills && (
        <ul className="flex flex-col   text-center  space-y-4 justify-center">
          {skills?.map((skill: skillInterface, index: number) => (
            <Skills {...{ skill, attribute }} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
}
