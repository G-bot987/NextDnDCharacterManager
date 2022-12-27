import { profile } from "console";
import React, { useEffect, useState } from "react";
import styles from "../../../../styles/Home.module.css";

import { useSelector, useDispatch } from "react-redux";
import { levelRootState, levelValue } from "../../../../slices/lvSlice";

import Lvcarousel from "./profilecomponents/Lvcarousel";

import {
  lvInterface,
  profileInterface,
} from "../../../../interfaces/templateInterface";

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

  const store = useSelector(levelRootState);
  const dispatch = useDispatch();

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
      const dummy = { value: 1, selected: null, proBonus: 2, experience: 0 };
      return dummy;
    }
  })();

  if (store[0] !== undefined && store[0].value !== LvCardState) {
    LvCardState.value = store[0].value;
    LvCardState.selected = store[0].selected;
    LvCardState.proBonus = store[0].proBonus;
    LvCardState.experience = store[0].experience;
  }

  const xpname = Object.keys(LvCardState);
  const { value, proBonus, experience } = LvCardState;

  const findLv = (e: any) => {
    const userXp: number = e.target.value;

    const lvCard = lv.findLast(
      (element: lvInterface) => element.experience < userXp
    );
    if (lvCard !== undefined) {
      const { value, proBonus } = lvCard;
      const reduxPayload = {
        value,
        proBonus,
        selected: true,
        experience: userXp,
      };

      return dispatch(levelValue(reduxPayload));
    }
  };

  useEffect(() => {
    const ReduxPayload = { value, proBonus, selected: true, experience };

    dispatch(levelValue(ReduxPayload));
  }, [changeCard]);

  return (
    <div className=" min-w-100 flex flex-row">
      <div className=" min-w-[30%] flex flex-col items-center space-y-8 pt-2 pb-2 ">
        <div className="">Level</div>
        <div className=" flex flex-col justify-around min-w-[45%] border-solid border-white rounded-lg border-2 py-6 px-2">
          <div className="text-left flex flex-col text-center justify-between">
            <label htmlFor={xpname[3]}>{xpname[3]}</label>
            <input
              className="text-center"
              type="number"
              key={`${experience}`}
              id={xpname[3]}
              name={xpname[3]}
              defaultValue={`${experience}`}
              onChange={findLv}
            />
          </div>
          <div className=" flex flex-row min-w-full">
            <div onClick={() => SetCardChange(changeCard - 1)}>
              <div className="w-6 h-full bg-white border-solid border-black rounded-full flex flex-col justify-center">
                <div>
                  <div className={styles.arrowleft} />
                </div>
              </div>
            </div>
            <Lvcarousel {...LvCardState} />
            <div onClick={() => SetCardChange(changeCard + 1)}>
              <div className="w-6 h-full bg-white border-solid border-black rounded-full flex flex-col justify-center ">
                <div>
                  <div className={styles.arrowright} />
                </div>
              </div>
            </div>
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
