import React, { useState } from "react";

interface PropsInterface {
  currentPage: any;
  handlePageChange: any;
}

export default function Header({
  currentPage,
  handlePageChange,
}: PropsInterface) {
  return (
    <div className="flex flex-col">
      <h1>DnD character Manager</h1>

      <ul className="inline-flex text-base p-8 italic space-x-4">
        <li>
          <a href="#" onClick={() => handlePageChange("BuildCharacter")}>
            build character
          </a>
        </li>

        <li className="headertab">
          <a href="#" onClick={() => handlePageChange("MyCharacters")}>
            my characters
          </a>
        </li>

        <li className="headertab">
          <a href="#" onClick={() => handlePageChange("FriendsPg")}>
            friends
          </a>
        </li>

        <li className="headertab">
          <a href="#" onClick={() => handlePageChange("GamesPg")}>
            my games
          </a>
        </li>

        <li className="headertab">
          <a href="#" onClick={() => handlePageChange("Profile")}>
            profile
          </a>
        </li>
      </ul>
    </div>
  );
}
