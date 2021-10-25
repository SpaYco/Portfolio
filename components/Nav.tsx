import type { NextPage } from "next";
import { motion } from "framer-motion";
import Info from "../assets/vector/info.svg";
import Contact from "../assets/vector/contact.svg";
import File from "../assets/vector/file.svg";
import Code from "../assets/vector/code.svg";

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
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            exit={{ opacity: 0, x: 400 }}
            onClick={() => setPage("about")}
            className={checkPage("about") ? "active-link" : ""}
          >
            <Info />
            <p>About</p>
          </motion.button>
        </li>
        <li>
          <motion.button
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.54 }}
            exit={{ opacity: 0, x: 400 }}
            onClick={() => setPage("projects")}
            className={checkPage("projects") ? "active-link" : ""}
          >
            <Code />
            <p>Projects</p>
          </motion.button>
        </li>
        <li>
          <motion.button
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.58 }}
            exit={{ opacity: 0, x: 400 }}
            onClick={() => setPage("resume")}
            className={checkPage("resume") ? "active-link" : ""}
          >
            <File />
            <p>Resume</p>
          </motion.button>
        </li>
        <li>
          <motion.button
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.62 }}
            exit={{ opacity: 0, x: 400 }}
            onClick={() => setPage("contact")}
            className={checkPage("contact") ? "active-link" : ""}
          >
            <Contact />
            <p>Contact</p>
          </motion.button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
