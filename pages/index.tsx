import type { NextPage } from "next";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Head from "next/head";

const Home: NextPage = () => {
  const [page, setPage] = useState<string>("about");
  const [tempPage, setTempPage] = useState<string>("about");
  const setNextPage = (page: string) => {
    setTempPage(page);
    setPage("");
  };

  const checkPage = (currentPage: string) => {
    if (currentPage === page) {
      return true;
    }
    return false;
  };

  return (
    <>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => setPage(tempPage)}
      >
        {checkPage("about") && <About setPage={setNextPage} />}
      </AnimatePresence>

      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => setPage(tempPage)}
      >
        {checkPage("projects") && <Projects />}
      </AnimatePresence>

      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => setPage(tempPage)}
      >
        {checkPage("resume") && <Resume />}
      </AnimatePresence>
      
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => setPage(tempPage)}
      >
        {checkPage("contact") && <Contact />}
      </AnimatePresence>

      <Nav checkPage={checkPage} setPage={setNextPage} />
    </>
  );
};

export default Home;
