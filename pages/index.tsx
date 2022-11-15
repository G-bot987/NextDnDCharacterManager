import React, { useState } from "react";
import styles from "../styles/Home.module.css";

import Header from "./mainnav/Header";
// top lv tabs
import BuildCharacter from "./components/mainpages/characternavbar/BuildCharacter";
import MyCharacters from "./components/mainpages/MyCharacters";
import FriendsPg from "./components/mainpages/FriendsPg";
import GamesPg from "./components/mainpages/GamesPg";
import Profile from "./components/mainpages/Profile";

// character building tabs
import Card from "./components/mainpages/characternavbar/tabs/Card";
import Bio from "./components/mainpages/characternavbar/tabs/Bio";
import Notes from "./components/mainpages/characternavbar/tabs/Notes";

// data & interfaces
import template from "../data/templateCharacterData";

// redux
import { useSelector, useDispatch } from "react-redux";
import { decrement, frog, increment } from "../slices/testSlice";

export default function App() {

  const count = useSelector(frog);
  const dispatch = useDispatch();

  const [pg, setCurrentPG] = useState(`bio`);
  const [buildCharTab, setCurrentbuildCharTab] = useState(`bio`);

  const renderPage = () => {
    if (pg === "BuildCharacter") {
      const handleBuildCharacterTabChange = (buildCharTab: any) =>
        setCurrentbuildCharTab(buildCharTab);

      const renderTab = () => {
        if (buildCharTab === "card") {
          return <Card {...template} />;
        }
        if (buildCharTab === "notes") {
          return <Notes />;
        }
        if (buildCharTab === "bio") {
          return <Bio />;
        }
      };
      return (
        <div className="min-h-full">
          <BuildCharacter
            currentTab={buildCharTab}
            handleBuildCharacterTabChange={handleBuildCharacterTabChange}
          />
          {renderTab()}
        </div>
      );
    }
    if (pg === "MyCharacters") {
      return <MyCharacters />;
    }
    if (pg === "FriendsPg") {
      return <FriendsPg />;
    }
    if (pg === "GamesPg") {
      return <GamesPg />;
    }
    if (pg === "Profile") {
      return <Profile />;
    }
  };

  const handlePageChange = (page: any) => setCurrentPG(page);
  return (
    <div className="flex-col flex justify-evenly flex-wrap">
      <Header currentPage={pg} handlePageChange={handlePageChange} />

      <h1>counter slkajdflkjsdl</h1>
      <p>count {count}</p>
      <button onClick={() => dispatch(increment())}>increment </button>

      <button onClick={() => dispatch(decrement())}>decrement</button>

      {renderPage()}
    </div>
  );
}
