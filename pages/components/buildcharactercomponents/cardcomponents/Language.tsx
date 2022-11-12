import React from "react";
import { languagesInterface } from "../../../../interfaces/templateInterface";

export default function Language(Props: languagesInterface) {
  const { name } = Props;
  return <li className="flex flex-row justify-center text-center">{name}</li>;
}
