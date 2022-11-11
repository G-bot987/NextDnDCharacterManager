import React from "react";
import { attributesInterface } from "../../../../interfaces/templateInterface";
import Attribute from "./attributescomponents/Attribute";

export default function Attributes(Props: attributesInterface[]) {
  console.log("Props in Attributes");
  console.log(Props);
  console.log("--");
  return (
    <div className="flex flex-row justify-center text-center justify-around">
      attributes
      <ul className="min-h-min flex flex-col justify-around">
        {Object.keys(Props).map((attribute: any, index: number) => (
          <Attribute {...Props[attribute]} key={`${index}`} />
        ))}
      </ul>
    </div>
  );
}
