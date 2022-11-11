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
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentTab === "Bio" ? "nav-link active" : "nav-link"}
        >
          character bio
        </a>
      </li>
      <li className="navtab">
        <a
          href="#attributes"
          onClick={() => handleBuildCharacterTabChange("attributes")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentTab === "Attributes" ? "nav-link active" : "nav-link"
          }
        >
          attributes
        </a>
      </li>

      <li className="navtab">
        <a
          href="#notes"
          onClick={() => handleBuildCharacterTabChange("notes")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentTab === "Notes" ? "nav-link active" : "nav-link"}
        >
          notes
        </a>
      </li>
    </ul>
  );
}
