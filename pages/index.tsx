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
import Attributes from "./components/mainpages/characternavbar/tabs/Attributes";
import Bio from "./components/mainpages/characternavbar/tabs/Bio";
import Notes from "./components/mainpages/characternavbar/tabs/Notes";

// data & interfaces
import template from "../data/templateCharacterData";

export default function App() {
  // use state hook to render different pg's

  const [pg, setCurrentPG] = useState(`bio`);
  const [buildCharTab, setCurrentbuildCharTab] = useState(`bio`);

  const renderPage = () => {
    if (pg === "BuildCharacter") {
      const handleBuildCharacterTabChange = (buildCharTab: any) =>
        setCurrentbuildCharTab(buildCharTab);

      const renderTab = () => {
        if (buildCharTab === "attributes") {
          return <Attributes {...template} />;
        }
        if (buildCharTab === "notes") {
          return <Notes />;
        }
        if (buildCharTab === "bio") {
          return <Bio />;
        }
      };
      return (
        <div>
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

      {renderPage()}
    </div>
  );
}
