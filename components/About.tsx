import type { NextPage } from "next";
import { motion } from "framer-motion";
import Background from "./Background";
import { useRouter } from 'next/router'

type Props = {
  setPage: (target: string) => void;
};

const About: NextPage<Props> = ({ setPage }) => {
  const router = useRouter()

  return (
    <section className='about'>
      <Background />
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.09 }}
        exit={{ opacity: 0, y: -100 }}
      >
        Hey There. I&apos;m Aziz
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.18 }}
        exit={{ opacity: 0 }}
      >
        I&apos;m a Full Stack Developer
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.24 }}
        exit={{ opacity: 0, y: 100 }}
      >
        I can help you build a product, feature or website
        <br />
        Look through some of my work and experience!
        <br />
        If you like what you see and have a project you need coded,
        <br />
        don’t hestiate to{" "}
        <a href='contact' onClick={() => setPage('contact')}>
          contact me
        </a>
        .
      </motion.p>
    </section>
  );
};

export default About;
