import React from "react";
import { attributesInterface } from "../../../../../interfaces/templateInterface";

export default function Attribute(Props: attributesInterface) {
  console.log("props in attribute render");
  console.log(Props);
  console.log("--");
  return <li>{Props.name}</li>;
}
