import React from "react";
import { lvInterface } from "../../../../../interfaces/dataInterfaces/templateInterface";

export default function Lvcarousel(Props: lvInterface) {
  const { value, proBonus } = Props;
  return (
    <div className="text-center">
      {value}
      <div>
        <h3>proficiency bonus</h3>
        {proBonus}
      </div>
    </div>
  );
}
