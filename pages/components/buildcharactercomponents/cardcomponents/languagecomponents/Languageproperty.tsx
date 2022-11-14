import React, { useState, useEffect } from "react";

import styles from "../../../../../styles/Home.module.css";

interface PropsInterface {
  language: string;
  dialectLanguage?: string;
  written?: boolean | null;
  spoken?: boolean | null;
  inflection?: boolean | null;
  proficiency?: boolean | null;
}

export default function Languageproperty(Props: PropsInterface) {
  const { language, dialectLanguage } = Props;
  const keysForNoDialect = Object.keys(Props);
  const property = keysForNoDialect[0];

  const [selected, setSelect] = useState(() => {
    if (typeof window !== "undefined") {
      if (typeof dialectLanguage === "string") {
        const saved: any = localStorage.getItem(
          language + property + dialectLanguage
        );

        const intialValue = JSON.parse(saved);
        return intialValue || false;
      } else {
        const saved: any = localStorage.getItem(language + property);

        const intialValue = JSON.parse(saved);
        return intialValue || false;
      }
    }
  });

  useEffect(() => {
    if (typeof dialectLanguage === "string") {
      localStorage.setItem(
        language + property + dialectLanguage,
        JSON.stringify(selected)
      );
    } else {
      localStorage.setItem(language + property, JSON.stringify(selected));
    }
    // storing
  }, [selected, language, property, dialectLanguage]);

  return (
    <p
      onClick={() => setSelect(!selected)}
      style={{
        background: selected ? "purple" : "",
      }}
    >
      {property}
    </p>
  );
}
