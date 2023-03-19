import React, { useState } from "react";
import styles from "../styles/Home.module.css";

import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'

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
import { weaponData } from "../data/weaponData";
import { items } from "../data/itemData";

export async function getServerSideProps(context: any) {
  try {
    await clientPromise

    const DB = (await clientPromise).db(process.env.DB)
    const collection = DB.collection(`${process.env.ITEMS_COLLECTION}`);
    const dataPreParse = await collection.find({}).toArray()
    const data = JSON.parse(JSON.stringify(dataPreParse))

    return {
      props: { itemData: data },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function App({
  itemData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [pg, setCurrentPG] = useState(`bio`);
  const [buildCharTab, setCurrentbuildCharTab] = useState(`bio`);

  const renderPage = () => {
    if (pg === "BuildCharacter") {
      const handleBuildCharacterTabChange = (buildCharTab: any) =>
        setCurrentbuildCharTab(buildCharTab);

      const renderTab = () => {
        if (buildCharTab === "card") {
          return <Card {...{ template, items: itemData, weaponData }} />;
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
      {renderPage()}
    </div>
  );
}
