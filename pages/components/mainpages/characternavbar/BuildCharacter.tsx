import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

interface PropsInterface {
  currentTab: any;
  handleBuildCharacterTabChange: any;
}

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function BuildCharacter({
  currentTab,
  handleBuildCharacterTabChange,
}: PropsInterface) {
  return (
    <ul className={`inline-flex text-base p-8 italic space-x-4`}>
      <li className="navtab">
        <a
          href="#bio"
          onClick={() => handleBuildCharacterTabChange("bio")}
          className={currentTab === "Bio" ? "nav-link active" : "nav-link"}
        >
          character bio
        </a>
      </li>
      <li className="navtab">
        <a
          href="#attributes"
          onClick={() => handleBuildCharacterTabChange("card")}
          className={currentTab === "card" ? "nav-link active" : "nav-link"}
        >
          card
        </a>
      </li>

      <li className="navtab">
        <a
          href="#notes"
          onClick={() => handleBuildCharacterTabChange("notes")}
          className={currentTab === "Notes" ? "nav-link active" : "nav-link"}
        >
          notes
        </a>
      </li>
    </ul>
  );
}
