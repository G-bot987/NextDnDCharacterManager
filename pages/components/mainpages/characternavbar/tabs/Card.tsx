import React, { useState } from "react";

import { templateInterface } from "../../../../../interfaces/templateInterface";

import Profile from "../../../buildcharactercomponents/cardcomponents/Profile";
import ArrowBtn from "../../../globalcomponents/Arrowbtn";

export default function Card(Props: templateInterface) {
  const { profile, attributes, languages } = Props;

  return (
    <div className=" flex flex-col justify-around min-h-full">
      <ul>
        <li>
          <Profile {...profile}></Profile>
        </li>
        <li>
          <ArrowBtn {...{ attributes }} />
        </li>
        <li>
          <ArrowBtn {...{ languages }} />
        </li>
      </ul>
    </div>
  );
}
