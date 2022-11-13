import React, { useState, useEffect } from "react";

import styles from "../../../../../styles/Home.module.css";

interface PropsInterface {
  language: string;
  written?: boolean | null;
  spoken?: boolean | null;
  inflection?: boolean | null;
  proficiency?: boolean | null;
}

export default function Languageproperty(Props: PropsInterface) {
  const { language } = Props;
  const keysForNoDialect = Object.keys(Props);
  const property = keysForNoDialect[0];

  const [selected, setSelect] = useState(() => {
    const saved: any = localStorage.getItem(language + property);

    const intialValue = JSON.parse(saved);
    return intialValue || false;
  });

  useEffect(() => {
    // storing
    localStorage.setItem(language + property, JSON.stringify(selected));
  }, [selected]);

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
