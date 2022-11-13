import React from "react";

import { dialectInterface } from "../../../../../interfaces/templateInterface";

export default function Dialect(Props: dialectInterface) {
  const { name } = Props;
  return <div>{name}</div>;
}
