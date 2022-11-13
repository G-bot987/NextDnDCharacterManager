import React, { useState } from "react";

import styles from "../../../../../styles/Home.module.css";

interface PropsInterface {
  language?: string;
  name?: string;
  written?: boolean | null;
  spoken?: boolean | null;
  inflection?: boolean | null;
  proficiency?: boolean | null;
}

export default function Languageproperty(Props: PropsInterface) {
  const { language } = Props;
  const keysForNoDialect = Object.keys(Props);
  const property = keysForNoDialect[0];

  const [selected, setSelect] = useState(false);

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
