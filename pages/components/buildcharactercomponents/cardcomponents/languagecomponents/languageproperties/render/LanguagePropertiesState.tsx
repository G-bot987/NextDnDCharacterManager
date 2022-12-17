import React from "react";
import { LanguagePropertiesRenderInterface } from "../../../../../../../interfaces/componentInterfaces/languageInterfaces/interfaces";

export default function LanguagePropertiesState(Props: any) {
  const { selected } = Props;
  return (
    <div
      style={{
        background: selected ? "purple" : "",
      }}
    >
      {Props.property}
    </div>
  );
}
