import React, { useState } from "react";

import { templateInterface } from "../../../../../interfaces/templateInterface";

import Profile from "../../../buildcharactercomponents/cardcomponents/Profile";
import ArrowBtn from "../../../globalcomponents/Arrowbtn";

export default function Card(Props: templateInterface) {
  const { profile, attributes, languages } = Props;

  return (
    <ul className=" flex flex-col justify-around min-h-full space-y-4">
      <li className=" border-solid border-white border-2 rounded-full flex flex-row justify-around ">
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
