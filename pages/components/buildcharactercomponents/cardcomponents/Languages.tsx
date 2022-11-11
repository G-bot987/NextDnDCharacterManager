import React from "react";
import { languagesInterface } from "../../../../interfaces/templateInterface";

export default function Languages(Props: languagesInterface) {
  console.log("Props in Languages");
  console.log(Props);
  console.log("--");
  return (
    <div className="flex flex-row justify-center text-center">
      <div>languages</div>
    </div>
  );
}
