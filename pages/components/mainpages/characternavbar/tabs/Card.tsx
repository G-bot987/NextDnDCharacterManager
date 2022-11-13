import React, { useState } from "react";

import { templateInterface } from "../../../../../interfaces/templateInterface";

import Profile from "../../../buildcharactercomponents/cardcomponents/Profile";
import ArrowBtn from "../../../globalcomponents/Arrowbtn";

export default function Card(Props: templateInterface) {
  const { profile, attributes, languages } = Props;

  return (
    <div className=" flex flex-col justify-around min-h-full">
      <ul>
        <li className=" border-solid border-white border-2 rounded-full flex flex-row justify-around ">
          <Profile {...profile}></Profile>
        </li>
        <li className=" border-solid border-white border-2 rounded-lg flex flex-row justify-around">
          <ArrowBtn {...{ attributes }} />
        </li>
        <li className=" border-solid border-white border-2 rounded-lg">
          <ArrowBtn {...{ languages }} />
        </li>
      </ul>
    </div>
  );
}
