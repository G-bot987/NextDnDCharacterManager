import React from "react";
import { profileInterface } from "../../../../interfaces/templateInterface";

export default function Profile(Props: profileInterface) {
  const {
    charName,
    background,
    strength,
    weakness,
    xp,
    lv,
    races,
    classes,
    image,
  } = Props;

  return (
    <div className="flex flex-col justify-center text-center">
      <div>profile</div>
      <form action="/send-data-here" method="post">
        <label htmlFor={charName}>{charName}</label>
        <input type="text" id={charName} name={charName} />
        <label htmlFor={background}>{background}</label>
        <input type="text" id={background} name={background} />
        <label htmlFor={strength}>{strength}</label>
        <input type="text" id={strength} name={strength} />
        <label htmlFor={weakness}>{weakness}</label>
        <input type="text" id={weakness} name={weakness} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
