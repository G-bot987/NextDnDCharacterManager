import React from "react";
import { lvInterface } from "../../../../../interfaces/templateInterface";

export default function Lvcarousel(Props: lvInterface) {
  const { value } = Props;
  return <div>{value}</div>;
}