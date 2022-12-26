import { profile } from "console";
import React, { useState } from "react";
import styles from "../../../../styles/Home.module.css";

import { profileInterface } from "../../../../interfaces/templateInterface";
import Lvcarousel from "./profilecomponents/Lvcarousel";

export default function Profile(Props: profileInterface) {
  const {
    name,
    background,
    strength,
    weakness,
    xp,
    lv,
    races,
    classes,
    image,
  } = Props;

  const nameOfProp = Object.keys(Props);

  var [changeCard, SetCardChange] = useState(0);

  if (changeCard < 0) {
    changeCard = 19;
  } else if (changeCard > 19) {
    changeCard = 0;
  }

  const LvCardState = (() => {
    if (lv) {
      return lv[changeCard];
    } else {
      const dummy = { value: 1, selected: null, proBonus: 2 };
      return dummy;
    }
  })();

  return (
    <div className=" min-w-100 flex flex-row">
      <div className=" min-w-[30%] flex flex-row items-center">
        <div onClick={() => SetCardChange(changeCard - 1)}>
          <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
            <div className={styles.arrowleft} />
          </div>
        </div>
        <Lvcarousel {...LvCardState} />
        <div onClick={() => SetCardChange(changeCard + 1)}>
          <div className="w-6 h-6 bg-white border-solid border-black rounded-full">
            <div className={styles.arrowright} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center min-w-fit space-y-8 pt-2 pb-2">
        <div className="justify-center">profile</div>

        <form
          action="/send-data-here"
          className="min-w-100 flex flex-col space-y-4 self-center"
          method="post"
        >
          <ul className="min-w-full flex flex-row space-x-4 flex-wrap">
            <div className="flex flex-col space-y-6">
              <li className="text-left flex flex-row justify-between">
                <label htmlFor={name}>{nameOfProp[0]}</label>

                <input type="text" id={name} name={name} />
              </li>
              <li className="text-left flex flex-row justify-between">
                <label htmlFor={background}>{nameOfProp[5]}</label>

                <input type="text" id={background} name={background} />
              </li>
            </div>
            <div className="flex flex-col justify-around space-y-6">
              <li className="text-left flex flex-row justify-between">
                <label htmlFor={strength}>{nameOfProp[6]}</label>

                <input type="text" id={strength} name={strength} />
              </li>
              <li className="text-left flex flex-row justify-between">
                <label htmlFor={weakness}>{nameOfProp[7]}</label>
                <input type="text" id={weakness} name={weakness} />
              </li>
            </div>
          </ul>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
