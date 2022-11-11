import React from "react";
import { profileInterface } from "../../../../interfaces/templateInterface";

export default function Profile(Props: profileInterface) {
  console.log("Props in profile");
  console.log(Props);
  console.log("--");
  return (
    <div className="flex flex-row justify-center text-center">
      <div>profile</div>
      <form action="/send-data-here" method="post">
        <label htmlFor={Props.charName}>{Props.charName}</label>
        <input type="text" id={Props.charName} name={Props.charName} />
        <label htmlFor="last">{Props.background}</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
