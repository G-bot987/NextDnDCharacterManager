import React from "react";

interface PropsInterface {
  value: string;
  selected: boolean;
}

export default function Selectedlanguageproperties(Props: any) {
  const properties = [Props];
  console.log("properties ", properties, " ---");

  return (
    <div>
      {Object.keys(Props).map((property: any, index: number) => (
        <div key={index}>{Props[property].value}</div>
      ))}
    </div>
  );
}
