import React from "react";

import { templateInterface } from "../../../../../interfaces/templateInterface";

import Attribute from "../../../buildcharactercomponents/cardcomponents/Attribute";
import Language from "../../../buildcharactercomponents/cardcomponents/Language";
import Profile from "../../../buildcharactercomponents/cardcomponents/Profile";

export default function Card(Props: templateInterface) {
  const { profile, attributes, languages } = Props;

  return (
    <div className=" flex flex-col justify-around min-h-full">
      <ul>
        <li>
          <Profile {...profile}></Profile>
        </li>
        <li>
          {attributes && (
            <ul className="min-h-min flex flex-col justify-around">
              {Object.keys(attributes).map((attribute: any, index: number) => (
                <Attribute {...attributes[attribute]} key={`${index}`} />
              ))}
            </ul>
          )}
        </li>
        <li>
          {languages && (
            <ul>
              {Object.keys(languages).map((language: any, index: number) => (
                <Language {...languages[language]} key={`${index}`} />
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
