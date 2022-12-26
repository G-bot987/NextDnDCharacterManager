import React, { useState } from "react";

import { languageInterface } from "../../../../../interfaces/templateInterface";

import styles from "../../../../../styles/Home.module.css";

import Dialect from "./Dialect";

import LanguageProperties from "./languageproperties/LanguageProperties";

export default function Language(Props: languageInterface) {
  const { language, dialects, written, spoken, inflection, proficiency } =
    Props;

  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-col">
      <div
        className="flex justify-center text-center flex-row bg-white rounded-lg"
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
      {show && !dialects && (
        <div className="flex flex-row  border-solid border-2 border-white rounded-lg mt-6">
          <div className="flex flex-col  justify-center text-center border-r-2 border-solid border-white min-w-[50%]">
            <div>
              <div className="border-b-2 border-solid border-white">
                <LanguageProperties {...{ written, language }} />
              </div>
              <LanguageProperties {...{ spoken, language }} />
            </div>
          </div>
          <div className="flex flex-col justify-center text-center min-w-[50%] ">
            <div>
              <div className="border-b-2 border-solid border-white">
                <LanguageProperties {...{ inflection, language }} />
              </div>
              <LanguageProperties {...{ proficiency, language }} />
            </div>
          </div>
        </div>
      )}
      {show && dialects && language && (
        <ul className="rounded-lg border-solid border-white border-2 mt-6">
          {dialects.map((dialect, index) => (
            <Dialect {...{ dialect, language }} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
}
