import React, { useState } from "react";

import { languageInterface } from "../../../../../interfaces/templateInterface";

import styles from "../../../../../styles/Home.module.css";

export default function Language(Props: languageInterface) {
  const { language, written, spoken, inflection, proficiency, dialect } = Props;

  const [show, setShow] = useState(false);

  return (
    <div
      className="flex justify-center text-center flex-row"
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
      <div className="border-white border-2 rounded-full">{language}</div>
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
  );
}
