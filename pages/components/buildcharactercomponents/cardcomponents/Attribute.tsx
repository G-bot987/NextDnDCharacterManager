import React, { useState } from "react";

import styles from "../../../../styles/Home.module.css";

import { attributesInterface } from "../../../../interfaces/templateInterface";

export default function Attribute(Props: attributesInterface) {
  const { name } = Props;

  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-row justify-center text-center border-solid border-white border-2 rounded-t-lg">
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
    </li>
  );
}
