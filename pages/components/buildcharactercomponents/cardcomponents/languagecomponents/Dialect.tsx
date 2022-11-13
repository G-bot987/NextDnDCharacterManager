import React, { useState } from "react";

import styles from "../../../../../styles/Home.module.css";

import { dialectInterface } from "../../../../../interfaces/templateInterface";
import Languageproperty from "./Languageproperty";

export default function Dialect(Props: dialectInterface) {
  const [open, setOpen] = useState(false);

  const { name, written, spoken, inflection, proficiency } = Props;

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
          <div className="flex flex-col  justify-center text-center border-r-2 border-solid border-white min-w-[50%]">
            <div className="border-b-2 border-solid border-white">
              <Languageproperty {...{ written, name }} />
            </div>
            <Languageproperty {...{ spoken, name }} />
          </div>
          <div className="flex flex-col justify-center text-center  min-w-[50%] ">
            <div className="border-b-2 border-solid border-white">
              <Languageproperty {...{ inflection, name }} />
            </div>
            <Languageproperty {...{ proficiency, name }} />
          </div>
        </div>
      )}
    </li>
  );
}
