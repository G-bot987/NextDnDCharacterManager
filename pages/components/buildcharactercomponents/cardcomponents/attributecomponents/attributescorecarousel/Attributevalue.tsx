import React, { useEffect, useState } from "react";
import ScoreRender from "./ScoreRender";
import styles from "../../../../../../styles/Home.module.css";

import { useSelector, useDispatch } from "react-redux";

import {
  attributesRootState,
  attributeValue,
} from "../../../../../../slices/attributesSlice";

export default function Attributevalue(Props: any) {
  const { score, attribute, mod } = Props;

  const store = useSelector(attributesRootState);
  const dispact = useDispatch();

  const inStore = store.find((element) => {
    return element.attribute === attribute;
  });

  const scoreState = (() => {
    if (inStore === undefined) {
      return 0;
    } else {
      return inStore.score.value - 1;
    }
  })();

  var [changeCard, SetCardChange] = useState(scoreState);

  if (0 > changeCard) {
    changeCard = 19;
  } else if (changeCard > 19) {
    changeCard = 0;
  }

  const ScoreToRender = (() => {
    if (score) {
      return score[changeCard];
    } else {
      const dummy = { value: 1, selected: null };
      return dummy;
    }
  })();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/pointbuy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ScoreToRender, attribute })
      })
      const json = await res.json()
      console.log(json)
    }
    fetchData()

  }, [ScoreToRender])


  useEffect(() => {
    const ReduxPayload = { score: ScoreToRender, attribute };
    dispact(attributeValue(ReduxPayload));
  }, [ScoreToRender]);

  return (
    <div className=" flex flex-row justify-between">
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
