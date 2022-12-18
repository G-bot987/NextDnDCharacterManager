import React, { useState } from "react";
import styles from "../../../../../../styles/Home.module.css";

import ScoreRender from "./ScoreRender";

export default function Attributevalue(Props: any) {


  const [changeCard, SetCardChange] = useState(0);
  return (
    <div className=" flex flex-row">
      <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
        <div className={styles.arrowleft} />
      </div>
      attributes
      {/* <ScoreRender /> */}
      <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
        <div className={styles.arrowright} />
      </div>
    </div>
  );
}
