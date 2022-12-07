import React from "react";
import { skillInterface } from "../../../../../../interfaces/templateInterface";

export default function Skills(Props: skillInterface) {
  const { skill } = Props;

  return <div>{skill}</div>;
}
