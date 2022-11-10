import React from "react";

export default function Header() {
  return (
    <div>
      <h1>DnD character Manager</h1>
      <div className="headercontainer">
        <div className="headertab">
          <a href="#">my characters</a>
        </div>

        <div className="headertab">
          <a href="#">friends </a>
        </div>

        <div className="headertab">
          <a href="#">my games</a>
        </div>

        <div className="headertab">
          <a href="#">profile</a>
        </div>
      </div>
    </div>
  );
}
