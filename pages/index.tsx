import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Bio from "./navbar/tabs/Bio";
import Attributes from "./navbar/tabs/Attributes";
import Notes from "./navbar/tabs/Notes";
import Header from "./components/Header";
import NavTabs from "./navbar/NavLinks";

export default function App() {
  // use state hook to render different pg's

  const [pg, setCurrentPG] = useState(`bio`);
  // const [data, setData] = useState(character);
  const renderPage = () => {
    if (pg === "bio") {
      return <Bio />;
    }
    if (pg === "attributes") {
      return <Attributes />;
    }
    if (pg === "notes") {
      return <Notes />;
    }
  };

  const handlePageChange = (page: any) => setCurrentPG(page);
  return (
    <div className="flex-col flex justify-evenly flex-wrap">
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={pg} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
