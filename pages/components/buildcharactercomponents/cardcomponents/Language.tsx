import React, { useState } from "react";
import { languagesInterface } from "../../../../interfaces/templateInterface";

import styles from "../../../../styles/Home.module.css";

export default function Language(Props: languagesInterface) {
  const { name, varients } = Props;
  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-col  border-white border-2 rounded-t-lg shrink max-h-min ">
      <div className="flex justify-center text-center flex-row">
        <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
          <div
            onClick={() => setShow(!show)}
            className={styles.arrowdown}
            style={{
              transform: show ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          />
        </div>
        {name}
        <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
          <div
            onClick={() => setShow(!show)}
            className={styles.arrowdown}
            style={{
              transform: show ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          />
        </div>
      </div>
      {show && (
        <ul className="flex flex-col justify-around">
          {varients.map((varient: any, index: number) => (
            <li key={index}> {varient.language}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
