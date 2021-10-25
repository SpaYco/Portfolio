import type { NextPage } from "next";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [page, setPage] = useState<string>('');
  const [tempPage, setTempPage] = useState<string>('');
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

  
  const handleClick = (target: string) => {
    router.push(`?section=${target}`)
    setNextPage(target)
  }

  useEffect(()=>{
    if(router.isReady){
      const { section } = router.query;
      setPage(section as string || 'about');
      setTempPage(section as string || 'about');
    }
}, [router.isReady]);

  return (
    <>
      <Head>
        <title>
          {tempPage.replace(/^\w/, (c) => c.toUpperCase())} | Portfolio
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <meta
          name='keywords'
          content='javascript, nextjs, reactjs, portfolio, SpaYco, Aziz, Mejri'
        />
        <meta name='author' content='Aziz Mejri' />
        <meta name='copyright' content='Aziz Mejri' />
        <meta name='robots' content='index,follow' />
        <meta name='language' content='English' />
      </Head>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => setPage(tempPage)}
      >
        {checkPage("about") && <About setPage={handleClick} />}
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

      <Nav checkPage={checkTempPage} setPage={handleClick} />
      <Social />
    </>
  );
};

export default Home;
