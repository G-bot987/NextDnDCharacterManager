import React from "react";
import { attributesInterface } from "../../../../interfaces/templateInterface";

export default function Attribute(Props: attributesInterface) {
  const { name } = Props;
  return <li>{name}</li>;
}
