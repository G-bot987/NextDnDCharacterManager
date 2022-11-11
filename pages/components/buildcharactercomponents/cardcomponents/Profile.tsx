import React from "react";
import { profileInterface } from "../../../../interfaces/templateInterface";

export default function Profile(Props: profileInterface) {
  console.log("Props in profile");
  console.log(Props);
  console.log("--");
  return (
    <div className="flex flex-row justify-center text-center">
      <div>profile</div>
    </div>
  );
}
