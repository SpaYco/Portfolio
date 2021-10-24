import type { NextPage } from "next";
import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import About from "../components/About";
import Head from "next/head";
import Image from "next/image";
import menu from "../assets/vector/menu.svg";

const Home: NextPage = () => {
  const [page, setPage] = useState<string>('about');

  const checkPage = (currentPage: string) => {
    if (currentPage === page) {
      return true;
    }
    return false;
  }

  return (
    <>
      <AnimatePresence
      initial={true}
      exitBeforeEnter={true}
      >
      {checkPage('about') && <About setPage={setPage}/>}
      </AnimatePresence>
      <Nav checkPage={checkPage} setPage={setPage}/>
    </>
  );
};

export default Home;
