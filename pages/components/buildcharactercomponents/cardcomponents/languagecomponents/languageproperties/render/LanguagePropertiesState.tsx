import React from "react";
import { LanguagePropertiesRenderInterface } from "../../../../../../../interfaces/componentInterfaces/languageInterfaces/interfaces";

export default function LanguagePropertiesState(
  Props: LanguagePropertiesRenderInterface
) {
  const { selected } = Props;
  return (
    <div
      style={{
        background: selected ? "white" : "",
        color: selected ? "black" : "",
      }}
    >
      {Props.property}
    </div>
  );
}
