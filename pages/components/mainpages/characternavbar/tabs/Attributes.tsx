import React from "react";
// import Attbox from "./Attbox";
// import Charinfo from "./Charinfo";
// import "./Attributes.css";
// import template from "../../data/templatecard";
// import Langbox from "./Langbox";
import { templateInterface } from "../../../../../interfaces/templateInterface";

export default function Attributes(Props: templateInterface) {
  //   const languages = template.languages;
  console.log("props in attributes");
  console.log(Props);
  console.log("--");
  return (
    <div>
      Attributes
      {/* <div
        className="avatar-img"
        style={{ backgroundImage: `url(${character.profile.avatar})` }}
      ></div>

      <Charinfo character={character} />
      <div className="card-body">
        <Attbox character={character} template={template} />
        <Langbox languages={languages} />
      </div> */}
    </div>
  );
}
