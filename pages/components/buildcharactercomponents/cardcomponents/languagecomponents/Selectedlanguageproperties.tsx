import React, { useState } from "react";
import styles from "../../../../../styles/Home.module.css";
import Selectedlanguageproperty from "./Selectedlanguageproperty";

interface PropsInterface {
  value: string;
  selected: boolean;
}

export default function Selectedlanguageproperties(Props: any) {
  const properties = [Props];
  const [show, setShow] = useState(false);

  return (
    <li className="flex flex-col space-y-4 min-w-[9%]">
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
        <div className="border-white border-2 rounded-full">
          My Language Proficiencies
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
          {Object.keys(Props).map((property: any, index: number) => (
            <Selectedlanguageproperty {...Props[property]} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
}
