import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col">
      <h1>DnD character Manager</h1>

      <ul className="inline-flex text-base p-8 italic space-x-4">
        <li className="headertab">
          <a href="#">my characters</a>
        </li>

        <li className="headertab">
          <a href="#">friends </a>
        </li>

        <li className="headertab">
          <a href="#">my games</a>
        </li>

        <li className="headertab">
          <a href="#">profile</a>
        </li>
      </ul>
    </div>
  );
}
