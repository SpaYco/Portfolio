import type { NextPage } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import info from "../assets/vector/info.svg";
import contact from "../assets/vector/contact.svg";
import file from "../assets/vector/file.svg";
import code from "../assets/vector/code.svg";

interface Props {
  checkPage: (currentPage: string) => boolean;
  setPage: (page: string) => void;
}

const Nav: NextPage<Props> = ({ checkPage, setPage }) => {
  return (
    <nav>
      <ul>
        <li>
          <motion.button
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.8 }}
            exit={{ opacity: 0, y: 400 }}
            onClick={() => setPage("about")}
            className={checkPage("about") ? "active-link" : ""}
          >
            <Image src={info} alt='info icon' />
            <p>About</p>
          </motion.button>
        </li>
        <li>
          <motion.button
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.84 }}
            exit={{ opacity: 0, y: 400 }}
            onClick={() => setPage("projects")}
            className={checkPage("projects") ? "active-link" : ""}
          >
            <Image src={code} alt='code icon' />
            <p>Projects</p>
          </motion.button>
        </li>
        <li>
          <motion.button
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.88 }}
            exit={{ opacity: 0, y: 400 }}
            onClick={() => setPage("resume")}
            className={checkPage("resume") ? "active-link" : ""}
          >
            <Image src={file} alt='file icon' />
            <p>Resume</p>
          </motion.button>
        </li>
        <li>
          <motion.button
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.92 }}
            exit={{ opacity: 0, y: 400 }}
            onClick={() => setPage("contact")}
            className={checkPage("contact") ? "active-link" : ""}
          >
            <Image src={contact} alt='contact icon' />
            <p>Contact</p>
          </motion.button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
