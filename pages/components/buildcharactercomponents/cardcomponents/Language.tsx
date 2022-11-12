import React, { useState } from "react";
import { languagesInterface } from "../../../../interfaces/templateInterface";

import styles from "../../../../styles/Home.module.css";

export default function Language(Props: languagesInterface) {
  const { name } = Props;
  console.log("props languages");
  console.log(Props);
  console.log("---");
  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-row justify-center text-center border-white border-2 rounded-t-lg">
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
