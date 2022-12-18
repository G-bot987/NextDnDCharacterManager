import React, { useState } from "react";

import styles from "../../../../styles/Home.module.css";

import {
  attributesInterface,
  skillInterface,
  scoreInterface,
} from "../../../../interfaces/templateInterface";
import Skills from "./attributecomponents/skillcomponents/skills/Skills";
import Attributevalue from "./attributecomponents/attributescorecarousel/Attributevalue";

export default function Attribute(Props: attributesInterface) {

  const { attribute, score, skills } = Props;

  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-col space-y-4 min-w-[9%] ">
      <div className="flex justify-center text-center flex-row">
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
        <div className="border-solid border-white border-2 rounded-lg flex-col">
          {attribute}
          <Attributevalue {...score} />
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
        <ul className="flex flex-col justify-around  text-center  space-y-4">
          {skills?.map((skill: skillInterface, index: number) => (
            <Skills {...{ skill, attribute }} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
}
