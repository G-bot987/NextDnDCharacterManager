import React from "react";

import Profile from "../../../buildcharactercomponents/cardcomponents/Profile";
import ArrowBtn from "../../../globalcomponents/Arrowbtn";
import { templateInterface } from "../../../../../interfaces/dataInterfaces/templateInterface";

export default function Card(Props: any) {

  const { languageData } = Props
  const { profile, attributes } = Props.template ?? {};
  const { items } = Props
  return (
    <ul className=" flex flex-col justify-around min-h-full space-y-4 min-h-100">
      <li className=" border-solid border-white border-2 rounded-full flex flex-row justify-around min-h-[20%]">
        <Profile {...profile}></Profile>
      </li>
      <li>
        <ArrowBtn {...{ attributes }} />
      </li>
      <li>
        <ArrowBtn {...{ languageData }} />
      </li>
      <li>
        <ArrowBtn {...{ items }} />
      </li>
    </ul>
  );
}
