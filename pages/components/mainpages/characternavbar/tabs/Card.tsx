import React from "react";

import { templateInterface } from "../../../../../interfaces/dataInterfaces/templateInterface";

import Profile from "../../../buildcharactercomponents/cardcomponents/Profile";
import ArrowBtn from "../../../globalcomponents/Arrowbtn";

export default function Card(Props: templateInterface) {

  const { profile, attributes, languages } = Props.template ?? {};

  return (
    <ul className=" flex flex-col justify-around min-h-full space-y-4 min-h-100">
      <li className=" border-solid border-white border-2 rounded-full flex flex-row justify-around min-h-[20%]">
        <Profile {...profile}></Profile>
      </li>
      <li>
        <ArrowBtn {...{ attributes }} />
      </li>
      <li>
        <ArrowBtn {...{ languages }} />
      </li>
    </ul>
  );
}
