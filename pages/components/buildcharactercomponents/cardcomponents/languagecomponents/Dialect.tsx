import React, { useState } from "react";

import styles from "../../../../../styles/Home.module.css";

import { dialectInterface } from "../../../../../interfaces/templateInterface";
import Languageproperty from "./Languageproperty";

interface Props {
  dialect: dialectInterface;
  language: string;
}

export default function Dialect(Props: Props) {
  const [open, setOpen] = useState(false);

  const { language, dialect } = Props;

  // find cleaner way to do this
  const written = dialect?.written;
  const spoken = dialect?.spoken;
  const proficiency = dialect?.proficiency;
  const inflection = dialect?.inflection;
  const dialectLanguage = dialect?.language;

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

        <p className="max-h-min">{dialectLanguage}</p>

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

      {open && language && (
        <div className="flex flex-row justify-around border-solid border-white border-y-2">
          <div className="flex flex-col  justify-center text-center border-r-2 border-solid border-white min-w-[50%]">
            <div className="border-b-2 border-solid border-white">
              <Languageproperty {...{ written, language, dialectLanguage }} />
            </div>
            <Languageproperty {...{ spoken, language, dialectLanguage }} />
          </div>
          <div className="flex flex-col justify-center text-center  min-w-[50%] ">
            <div className="border-b-2 border-solid border-white">
              <Languageproperty
                {...{ inflection, language, dialectLanguage }}
              />
            </div>
            <Languageproperty {...{ proficiency, language, dialectLanguage }} />
          </div>
        </div>
      )}
    </li>
  );
}
