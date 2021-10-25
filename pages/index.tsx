import type { NextPage } from "next";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Head from "next/head";

const Home: NextPage = () => {
  const [page, setPage] = useState<string>("about");
  const [tempPage, setTempPage] = useState<string>("about");
  const setNextPage = (page: string) => {
    setTempPage(page);
    setPage("");
  };

  const checkTempPage = (currentPage: string) => {
    if (currentPage === tempPage) {
      return true;
    }
    return false;
  };

  const checkPage = (currentPage: string) => {
    if (currentPage === page) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Head>
        <title>{tempPage.replace(/^\w/, c => c.toUpperCase())} | Portfolio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <meta
          name='keywords'
          content='javascript, nextjs, reactjs, portfolio, SpaYco, Aziz, Mejri'
        />
        <meta name='author' content='Aziz Mejri' />
        <meta name='copyright' content='Aziz Mejri' />
        <meta name="robots" content="index,follow"/>
        <meta name="language" content="English" />
      </Head>
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

      <Nav checkPage={checkTempPage} setPage={setNextPage} />
      <Social />
    </>
  );
};

export default Home;
