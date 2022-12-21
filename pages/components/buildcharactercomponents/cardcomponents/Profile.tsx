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
    <div className="flex flex-col justify-center text-center">
      <div>profile</div>
      <form action="/send-data-here" method="post">
        <label htmlFor={name}>{nameOfProp[0]}</label>
        <input type="text" id={name} name={name} />
        <label htmlFor={background}>{nameOfProp[5]}</label>
        <input type="text" id={background} name={background} />
        <label htmlFor={strength}>{nameOfProp[6]}</label>
        <input type="text" id={strength} name={strength} />
        <label htmlFor={weakness}>{nameOfProp[7]}</label>
        <input type="text" id={weakness} name={weakness} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
