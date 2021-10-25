import type { NextPage } from "next";
import { motion } from "framer-motion";
import Linkedin from "../assets/vector/linkedin.svg";
import Github from "../assets/vector/github.svg";
import Twitter from "../assets/vector/twitter.svg";
import Angel from "../assets/vector/angel.svg";

const Nav: NextPage = () => {
  return (
    <div className='social'>
      <ul>
        <li>
          <motion.a
            href='https://www.linkedin.com/in/spayco'
            target='_blank'
            rel='norefferer'
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            exit={{ opacity: 0, x: -55 }}
          >
            <Linkedin />
          </motion.a>
        </li>
        <li>
          <motion.a
            href='https://angel.co/spayco'
            target='_blank'
            rel='norefferer'
            initial={{ opacity: 0, x: -55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.55 }}
            exit={{ opacity: 0, x: -55 }}
          >
            <Angel />
          </motion.a>
        </li>
        <li>
          <motion.a
            href='https://twitter.com/iSpaYco'
            target='_blank'
            rel='norefferer'
            initial={{ opacity: 0, x: -55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.59 }}
            exit={{ opacity: 0, x: -55 }}
          >
            <Twitter />
          </motion.a>
        </li>
        <li>
          <motion.a
            href='https://github.com/SpaYco'
            target='_blank'
            rel='norefferer'
            initial={{ opacity: 0, x: -55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.64 }}
            exit={{ opacity: 0, x: -55 }}
          >
            <Github />
          </motion.a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
