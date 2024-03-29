import React, { useState } from "react";
import styles from './index.module.scss'

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
import prisma from "../src/lib/prisma";



export default function App({
  itemData, languageData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  console.log('from get serverside props')
  console.log(itemData)
  console.log(languageData)
  console.log('--')
  const [pg, setCurrentPG] = useState(`bio`);
  const [buildCharTab, setCurrentbuildCharTab] = useState(`bio`);

  const renderPage = () => {
    if (pg === "BuildCharacter") {
      const handleBuildCharacterTabChange = (buildCharTab: any) =>
        setCurrentbuildCharTab(buildCharTab);

      const renderTab = () => {
        if (buildCharTab === "card") {
          return <Card {...{ template, items: itemData, weaponData, languageData }} />;
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
    <section className={styles.contentWrapper}>
      <Header  handlePageChange={handlePageChange} />
      {renderPage()}
    </section>
  );
}


export async function getServerSideProps(context: any) {
  try {

    const languageData = await prisma.languages.findMany({
      include: {
        variants: {
          include: {
            dialects: {
            }
          }
        }
      }
    });


    const itemData = await prisma.items.findMany()

    console.log('itemdata')
    console.log(itemData)
    console.log('--')
    return {
      props: { itemData, languageData },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
