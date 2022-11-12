import React, { useState } from "react";

import styles from "../../../../../styles/Home.module.css";

import { templateInterface } from "../../../../../interfaces/templateInterface";

import Attribute from "../../../buildcharactercomponents/cardcomponents/Attribute";
import Language from "../../../buildcharactercomponents/cardcomponents/Language";
import Profile from "../../../buildcharactercomponents/cardcomponents/Profile";

export default function Card(Props: templateInterface) {
  const { profile, attributes, languages } = Props;
  const [showAttributes, setShowAttributes] = useState(false);
  const [showLanguages, setShoLanguages] = useState(false);

  return (
    <div className=" flex flex-col justify-around min-h-full">
      <ul>
        <li>
          <Profile {...profile}></Profile>
        </li>
        <li>
          <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
            <div
              className={`${styles.attributearrow}`}
              style={{
                transform: showAttributes ? "rotate(130deg)" : "",
                transition: "transform 150ms ease",
                margin: showAttributes ? "0.3rem 0 0 0.4rem" : "",
              }}
              onClick={() => setShowAttributes(!showAttributes)}
            ></div>
          </div>

          {showAttributes && attributes && (
            <ul className="min-h-min flex flex-row justify-around">
              {Object.keys(attributes).map((attribute: any, index: number) => (
                <Attribute {...attributes[attribute]} key={`${index}`} />
              ))}
            </ul>
          )}
        </li>
        <li>
          <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
            <div
              className={`${styles.attributearrow}`}
              style={{
                transform: showLanguages ? "rotate(130deg)" : "",
                transition: "transform 150ms ease",
                margin: showLanguages ? "0.3rem 0 0 0.4rem" : "",
              }}
              onClick={() => setShoLanguages(!showLanguages)}
            ></div>
          </div>
          {showLanguages && languages && (
            <ul className="min-h-min flex flex-row justify-around">
              {Object.keys(languages).map((language: any, index: number) => (
                <Language {...languages[language] } key={`${index}`} />
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
