import React from "react";

import { templateInterface } from "../../../../../interfaces/templateInterface";

import Attributes from "../../../buildcharactercomponents/cardcomponents/Attributes";
import Languages from "../../../buildcharactercomponents/cardcomponents/Languages";
import Profile from "../../../buildcharactercomponents/cardcomponents/Profile";

export default function Card(Props: templateInterface) {
  const { profile, attributes, languages } = Props;

 

  return (
    <div className=" flex flex-col justify-around min-h-full">
      <Profile {...profile}></Profile>
      <Attributes {...attributes}></Attributes>
      <Languages {...languages}></Languages>
    </div>
  );
}
