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
    <div className="flex flex-col justify-center text-center min-w-[60%]">
      <div className="justify-center">profile</div>

      <form
        action="/send-data-here"
        className="min-w-100 flex flex-col"
        method="post"
      >
        <ul className="min-w-full flex flex-row flex-wrap">
          <div className="flex flex-col space-y-6">
            <li>
              <label htmlFor={name}>{nameOfProp[0]}</label>

              <input type="text" id={name} name={name} />
            </li>
            <li>
              <label htmlFor={background}>{nameOfProp[5]}</label>

              <input type="text" id={background} name={background} />
            </li>
          </div>
          <div className="flex flex-col justify-around space-y-6">
            <li>
              <label htmlFor={strength}>{nameOfProp[6]}</label>

              <input type="text" id={strength} name={strength} />
            </li>
            <li>
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
