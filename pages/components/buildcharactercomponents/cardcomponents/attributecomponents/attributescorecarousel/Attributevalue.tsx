import React, { useState } from "react";
import styles from "../../../../../../styles/Home.module.css";

import ScoreRender from "./ScoreRender";

export default function Attributevalue(Props: any) {
  var [changeCard, SetCardChange] = useState(0);

  if (0 > changeCard) {
    changeCard = 19;
  } else if (changeCard > 19) {
    changeCard = 0;
  }

  const ScoreToRender = Props[changeCard];

  return (
    <div className=" flex flex-row">
      <div onClick={() => SetCardChange(changeCard - 1)}>
        <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
          <div className={styles.arrowleft} />
        </div>
      </div>
      <ScoreRender {...ScoreToRender} />
      <div onClick={() => SetCardChange(changeCard + 1)}>
        <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
          <div className={styles.arrowright} />
        </div>
      </div>
    </div>
  );
}
