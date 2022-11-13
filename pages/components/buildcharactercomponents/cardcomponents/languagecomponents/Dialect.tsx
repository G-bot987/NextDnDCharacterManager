import React, { useState } from "react";

import styles from "../../../../../styles/Home.module.css";

import { dialectInterface } from "../../../../../interfaces/templateInterface";

export default function Dialect(Props: dialectInterface) {
  const [open, setOpen] = useState(false);

  const { name } = Props;

  const keysForNoDialect = Object.keys(Props);

  const written = keysForNoDialect[1];
  const spoken = keysForNoDialect[2];
  const inflection = keysForNoDialect[3];
  const proficiency = keysForNoDialect[4];

  console.log(written, spoken, inflection, proficiency);

  return (
    <li className="flex flex-col justify-around">
      <div
        className=" flex flex-row inline-flex justify-around "
        onClick={() => setOpen(!open)}
      >
        <div className="w-6 h-6">
          <div
            className={styles.arrowdownwhite}
            style={{
              transform: open ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          />
        </div>

        <p className="max-h-min">{name}</p>

        <div className="w-6 h-6">
          <div
            className={styles.arrowdownwhite}
            style={{
              transform: open ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          />
        </div>
      </div>

      {open && (
        <div className="flex flex-row justify-around border-solid border-white border-y-2">
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
    </li>
  );
}
