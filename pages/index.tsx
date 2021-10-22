import type { NextPage } from "next";
import { useState } from 'react';
import Nav from "../components/Nav";
import About from "../components/About";
import Head from "next/head";
import Image from "next/image";
import menu from "../assets/vector/menu.svg";

const Home: NextPage = () => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <>
      <button className={`hamburger-menu ${status ? 'active-ham' : 'inactive-ham'}`} onClick={() => setStatus(!status)}>
      <Image src={menu} alt="hamburger menu"/>
      </button>
      <Nav status={status} />
      <About />
    </>
  );
};

export default Home;
