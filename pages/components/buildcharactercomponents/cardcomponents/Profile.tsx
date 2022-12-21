import { profile } from "console";
import React from "react";
import { profileInterface } from "../../../../interfaces/templateInterface";

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

  return (
    <div className="flex flex-col justify-center text-center min-w-[60%] space-y-8 pt-2 pb-2">
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
  );
}
