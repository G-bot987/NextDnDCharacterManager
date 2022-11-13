import React, { useState } from "react";

import { languageInterface } from "../../../../../interfaces/templateInterface";

import styles from "../../../../../styles/Home.module.css";

export default function Language(Props: languageInterface) {
  const { language, dialect } = Props;

  const [show, setShow] = useState(false);

  const keysForNoDialect = Object.keys(Props);

  const written = keysForNoDialect[1];
  const spoken = keysForNoDialect[2];
  const inflection = keysForNoDialect[3];
  const proficiency = keysForNoDialect[4];

  return (
    <li className="flex flex-col">
      <div
        className="flex justify-center text-center flex-row bg-white rounded-t-lg"
        onClick={() => setShow(!show)}
      >
        <div className="w-6 h-6 l">
          <div
            className={styles.arrowdown}
            style={{
              transform: show ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          />
        </div>
        <div className="text-black">{language}</div>
        <div className="w-6 h-6">
          <div
            className={styles.arrowdown}
            style={{
              transform: show ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          />
        </div>
      </div>
      {show && !dialect && (
        <div className="flex flex-row justify-around">
          <div className="flex flex-col  justify-center text-center">
            <p>{written}</p>
            <p>{spoken}</p>
          </div>
          <div className="flex flex-col justify-center text-center ">
            <p>{inflection}</p>
            <p>{proficiency}</p>
          </div>
        </div>
      )}
      {show && dialect && <p> i do have dialect</p>}
    </li>
  );
}
