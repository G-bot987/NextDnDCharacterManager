import React, { useState } from "react";

import styles from "../../../../styles/Home.module.css";

import { attributesInterface } from "../../../../interfaces/templateInterface";

export default function Attribute(Props: attributesInterface) {
  const { attribute } = Props;

  console.log("props ");
  console.log(Props);
  console.log("---");

  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-row justify-center text-center ">
      <div onClick={() => setShow(!show)} className="flex flex-row">
        <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
          <div
            className={styles.arrowdown}
            style={{
              transform: show ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          />
        </div>
        <div className="border-solid border-white border-2 rounded-t-lg">
          {attribute}
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
          {/* {varients.map((varient: languageInterface, index: number) => (
            <Language {...varient} key={index} />
          ))} */}
        </ul>
      )}
    </li>
  );
}
